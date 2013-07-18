var parser = require('../grammar/grammar');
var compiler = require('../src/recursiveCompiler');

exports.testIdentifierConversion = function (test) {
    "use strict";
    (function () {
        var orig = "test-identifier",
            should = "testIdentifier",
            actual = compiler.transformIdent(orig);

        test.equals(actual, should);
    }());

    (function () {
        var orig = "this-is-a-larger-identifier",
            should = "thisIsALargerIdentifier",
            actual = compiler.transformIdent(orig);
        test.equals(actual, should);
    }());

    test.done();
};

function compile(program) {
    "use strict";
    return compiler.compileIter(parser.parse(program)[0]);
}

exports.testArrayNumber = function (test) {
    "use strict";
    (function () {
        var program = "[1 2 3 4 5 6]",
            should = "[1,2,3,4,5,6]",
            actual = compile(program);

        test.equals(actual, should);
    }());
    (function () {
        var program = "[1 2 [3.1 3.2 3.4] 4 5 6]",
            should = "[1,2,[3.1,3.2,3.4],4,5,6]",
            actual = compile(program);

        test.equals(actual, should);
    }());
    test.done();
};

exports.testObjLiteral = function (test) {
    "use strict";
    (function () {
        var program = "{'a: 5, \"b\": \"hi\"}",
            should = "{'a':5,\"b\":\"hi\"}",
            actual = compile(program);
        test.equals(actual, should);
    }());

    (function () {
        var program = "{'a: [1 2 3 4], \"b\": \"hi\"}",
            should = "{'a':[1,2,3,4],\"b\":\"hi\"}",
            actual = compile(program);
        test.equals(actual, should);
    }());
    (function () {
        var program = "{a: 5}",
            should = "{a:5}",
            actual = compile(program);
        test.equals(actual, should);
    }());
    test.done();
};

exports.testLet = function (test) {
    "use strict";
    (function () {
        var program = "(let ((a 5)(b 6)) (log a))",
            should = "(function (a,b) {\nreturn log(a);\n}(5,6))",
            actual = compile(program);

        test.equals(actual, should);
    }());

    (function () {
        var program = "(let ((a (f a b))) (log a))",
            should = "(function (a) {\nreturn log(a);\n}(f(a,b)))",
            actual = compile(program);
        test.equals(actual, should);
    }());

    test.done();
};

exports.testFunctionCall = function (test) {
    "use strict";
    (function () {
        var program = "(fn a (gn x 5 'hi) \"hi\")",
            should = "fn(a,gn(x,5,'hi'),\"hi\")",
            actual = compile(program);

        test.equals(actual, should);
    }());
    test.done();
};

exports.testLetStar = function (test) {
    "use strict";
    (function () {
        var program = "(let* ((test 5) (lol 'hi)) (log lol test))",
            should = "(function () {\nvar test = 5,\nlol = 'hi';\nreturn log(lol,test);\n}())",
            actual = compile(program);

        test.equals(actual, should);
    }());

    test.done();
};

exports.testDefine = function (test) {
    "use strict";
    (function () {
        var program = "(define x 5)",
            should = "var x = 5;",
            actual = compile(program);

        test.equals(actual, should);
    }());

    (function () {
        var program = "(define this.x (f a b c))",
            should = "this.x = f(a,b,c);",
            actual = compile(program);

        test.equals(actual, should);
    }());

    test.done();
};

exports.testLambda = function (test) {
    "use strict";
    (function () {
        var program = "(lambda (x) (log x))",
            should = "(function (x) {\nreturn log(x);\n})",
            actual = compile(program);

        test.equals(actual, should);
    }());

    (function () {
        var program = "(lambda () (log 'hi))",
            should = "(function () {\nreturn log('hi');\n})",
            actual = compile(program);

        test.equals(actual, should);
    }());

    test.done();
};

exports.testEasyOps = function (test) {
    "use strict";

    (function () {
        var program = "(+ 1 2 3 4)",
            should = "(1+2+3+4)",
            actual = compile(program);

        test.equals(actual, should);
    }());

    (function () {
        var program = "(* 1 2 3 4)",
            should = "(1*2*3*4)",
            actual = compile(program);

        test.equals(actual, should);
    }());

    test.done();
};

exports.testif = function (test) {
    "use strict";

    (function () {
        var program = "(if true 4 'hi)",
            should = "((true)?(4):('hi'))",
            actual = compile(program);
        test.equals(actual, should);
    }());

    (function () {
        var program = "(if (f) (g a) 'no)",
            should = "((f())?(g(a)):('no'))",
            actual = compile(program);
        test.equals(actual, should);
    }());

    test.done();
};

exports.testcond = function (test) {
    "use strict";

    (function () {
        var program = "(cond ((f) 'hi) ((g a b) (r c)))",
            should = "(function () {\nif (f()) {\nreturn 'hi';\n}" +
                " else if (g(a,b)) {\nreturn r(c);\n} else {\n" +
                "throw new Error(\"No Match Found. always terminate with a 'true'\");" + "\n}\n" + "}())",
            actual = compile(program);
        test.equals(actual, should);
    }());

    test.done();
};

exports.testSet = function (test) {
    "use strict";

    (function () {
        var program = "(set x 5)",
            should = "x = 5;",
            actual = compile(program);
        test.equals(actual, should);
    }());
    test.done();
};

exports.testMethod = function (test) {
    "use strict";

    (function () {
        var program = "(.getter obj)",
            should = "obj.getter()",
            actual = compile(program);
        test.equals(actual, should);
    }());

    (function () {
        var program = "(.push [1 2 3] 4)",
            should = "[1,2,3].push(4)",
            actual = compile(program);
        test.equals(actual, should);
    }());

    test.done();
};

exports.prop = function (test) {
    "use strict";
    (function () {
        var program = "(#length [1 2 3])",
            should = "[1,2,3].length",
            actual = compile(program);
        test.equals(actual, should);
    }());

    test.done();
};

exports.equality = function (test) {
    "use strict";
    (function () {
        var program = "(= 4 5)",
            should = "(4===5)",
            actual = compile(program);
        test.equals(actual, should);
    }());

    test.done();
};

exports.switchc = function (test) {
    "use strict";
    (function (){
        var program = "(switch x (5 'hi) ((+ 1 2) g) ((f) (p a) (default 10))",
            should = "(function (){\nswitch(x){\ncase 5: return 'hi'\n}())";
    }());

    test.done();
};