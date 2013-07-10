var p = require('../grammar/grammar');
var c = require('../src/recursiveCompiler');

function print(obj){
    console.log(JSON.stringify(obj)+",");
}
//console.log("[");




/*print(p.parse(' "hi" '));
print(p.parse("(hi  , test)"));
print(p.parse("(hi test)"));
print(p.parse("(hi 'ty)"));
print(p.parse("(hi [a b c])"));

print(p.parse("(hi  (test))"));

print(p.parse("[hi  , test]"));
print(p.parse(" [] "));
print(p.parse(" 'hi "));
print(p.parse(" {} "));
*/
print(p.parse(" {a: 'hi b: 'test }"));

//print(p.parse("1.32"));


//var lexed = p.parse("[1 2 3 4 5]");
//var compiled = c.compileIter(lexed[0]);
//console.log(compiled);





//console.log("]");
