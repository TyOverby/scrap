var parser = require('../grammar/grammar');
var compiler = require('../src/recursiveCompiler');

exports.testIdentifierConversion = function(test) {

    (function () {
        var orig = "test-identifier",
            should = "testIdentifier",
            actual = compiler.transformIdent(orig);

        test.equals(should, actual);
    })();

    (function () {
        var orig = "this-is-a-larger-identifier",
            should = "thisIsALargerIdentifier",
            actual = compiler.transformIdent(orig);
        test.equals(should, actual);
    })();

    test.done();
};

function compile(program){
    return compiler.compileIter(parser.parse(program)[0]);
};

exports.testArrayNumber = function(test){
    (function (){
        var program = "[1 2 3 4 5 6]",
            should = "[1,2,3,4,5,6]",
            actual = compile(program);

        test.equals(should, actual);
        console.log("test");
    })();
    (function (){
        var program = "[1 2 [3.1 3.2 3.4] 4 5 6]",
            should = "[1,2,[3.1,3.2,3.4],4,5,6]",
            actual = compile(program);

        test.equals(should, actual);
        console.log("test");
    })();
   test.done();
};

exports.testObjLiteral = function(test) {
    (function () {
            var program = "{'a: 5, \"b\": \"hi\"}",
                should="{'a':5,\"b\":\"hi\"}",
                actual = compile(program);
        test.equals(should, actual);
    })();

   (function () {
        var program = "{'a: [1 2 3 4], \"b\": \"hi\"}",
            should="{'a':[1,2,3,4],\"b\":\"hi\"}",
            actual = compile(program);
        test.equals(should, actual);
    })();
    test.done();
};

exports.testLet = function (test) {
    (function () {
        var program = "(let ((a 5)(b 6)) (log a))",
            should = "(function (a,b) {return log(a);\n}(5,6))",
            actual = compile(program);

        test.equals(should, actual);
    })();

    test.done();
};

exports.testFunctionCall = function (test) {
    (function (){
        var program = "(fn a (gn x 5 'hi) \"hi\")",
            should = "fn(a,gn(x,5,'hi'),\"hi\")",
            actual = compile(program);

        test.equals(should, actual);
    })();
};
















