let foo = (a, b) => {
    console.log(`Entering <anonymous function>(${ a }, ${ b }) at line 1`);
    a + b + 100;
};
foo();