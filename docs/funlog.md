## Functions

<dl>
<dt><a href="#transpile">transpile(inputFile, outputFile)</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd></dd>
<dt><a href="#addLogging">addLogging(code)</a> ⇒</dt>
<dd><p>Returns the resulting JS code with logging statements added at the beggining
of each function</p>
</dd>
<dt><a href="#addBeforeCode">addBeforeCode(node)</a></dt>
<dd><p>Transforms the given node of the AST to add a logging statement at the
beggining of the function it represents</p>
</dd>
</dl>

<a name="transpile"></a>

## transpile(inputFile, outputFile) ⇒ <code>Promise.&lt;void&gt;</code>
**Kind**: global function  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the transformation
is complete and the file is written or the output is printed to the console
if no output file is specified  

| Param | Type | Description |
| --- | --- | --- |
| inputFile | <code>string</code> | The file containing the JS code to be  transformed |
| outputFile | <code>string</code> | The file to write the logged JS code to |

<a name="addLogging"></a>

## addLogging(code) ⇒
Returns the resulting JS code with logging statements added at the beggining
of each function

**Kind**: global function  
**Returns**: The resulting JS code with logging statements added  

| Param | Type | Description |
| --- | --- | --- |
| code | <code>string</code> | The input JS code to be transformed |

<a name="addBeforeCode"></a>

## addBeforeCode(node)
Transforms the given node of the AST to add a logging statement at the
beggining of the function it represents

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>\*</code> | The node of the AST to be edited |

