import * as escodegen from "escodegen";
import * as espree from "espree";
import * as estraverse from "estraverse";
import * as fs from "fs/promises";

/**
 * 
 * @param { string } inputFile The file containing the JS code to be 
 * transformed
 * @param { string } outputFile The file to write the logged JS code to
 * @returns { Promise<void> } A promise that resolves when the transformation
 * is complete and the file is written or the output is printed to the console
 * if no output file is specified
 */
export async function transpile(inputFile, outputFile) {
  const inputCode = await fs.readFile(inputFile, "utf-8");
  const resultCode = addLogging(inputCode);
  if (outputFile === undefined) {
    console.log(resultCode);
    return;
  }
  await fs.writeFile(outputFile, resultCode);
}

/**
 * Returns the resulting JS code with logging statements added at the beggining
 * of each function
 * @param { string } code The input JS code to be transformed
 * @returns The resulting JS code with logging statements added
 */
export function addLogging(code) {
  const ast = espree.parse(code, { ecmaVersion: 6, loc: true });
  estraverse.traverse(ast, {
    enter: function(node, parent) {
      if (node.type === 'FunctionDeclaration' ||
          node.type === 'FunctionExpression' ||
          node.type === 'ArrowFunctionExpression') {
        addBeforeCode(node);
      }
    }
  });
  return escodegen.generate(ast);
}

/**
 * Transforms the given node of the AST to add a logging statement at the
 * beggining of the function it represents
 * @param { * } node The node of the AST to be edited
 */
function addBeforeCode(node) {
  const name = node.id ? node.id.name : '<anonymous function>';
  const parameters = node.params.map(p => '${ ' + p.name + ' }').join(', ');
  const line = node.loc.start.line;
  const beforeCode = "console.log(`Entering " + name + "(" + parameters + ") at line " + line + "`);";
  const beforeNodes = espree.parse(beforeCode, { ecmaVersion: 6 }).body;
  node.body.body = beforeNodes.concat(node.body.body);
}
