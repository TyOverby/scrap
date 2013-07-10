var util = require('./util.js'),
    _ = require('underscore'),
    letc = require('./builtin/let'),
    lets = require('./builtin/letStar'),
    define = require('./builtin/define'),
    lambda = require('./builtin/lambda'),
    ifc = require('./builtin/ifc.js'),
    cond = require('./builtin/cond.js'),
    setc = require('./builtin/set.js');

function compileSexpressions(node, recursiveCompiler) {
    "use strict";

    var first = node.value[0].value;
    var rest = _.rest(node.value);

    // TODO(tyoverby) make this optimize out the 0-arg case
    function inject(values, op, memo) {
        var compiled = _.map(values, recursiveCompiler);
        compiled.push(memo);
        return util.mkString(compiled, "(", op, ")");
    }

    switch (first) {
    case '+':
        return inject(rest, '+', '0');
    case '-':
        return inject(rest, '-', '0');
    case '*':
        return inject(rest, '*', '1');
    case '/':
        return inject(rest, '/', '1');
    case '%':
        return inject(rest, '%', '1');
    case 'and':
        return inject(rest, '&&', 'true');
    case 'or':
        return inject(rest, '||', 'false');
    }

    switch (first) {
    case 'let':
        return letc(node, recursiveCompiler);
    case 'let*':
        return lets(node, recursiveCompiler);
    case 'define':
        return define(node, recursiveCompiler);
    case 'lambda':
        return lambda(node, recursiveCompiler);
    case 'if':
        return ifc(node, recursiveCompiler);
    case 'cond':
        return cond(node, recursiveCompiler);
    case 'set':
        return setc(node, recursiveCompiler);

    default:
        return compileFCall(node, recursiveCompiler);
    }
}

function compileFCall(node, compile) {
    "use strict";

    var fn = compile(node.value[0]),
        args = _.tail(node.value),
        cargs = _.map(args, function (arg) {
            return compile(arg);
        });


    return fn + util.mkString(cargs, '(', ',', ')');
}


exports.compile = compileSexpressions;
