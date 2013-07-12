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

    var first = node.value[0].value,
        rest = _.rest(node.value);

    // TODO(tyoverby) make this optimize out the 0-arg case
    function inject(values, op, memo) {
        if (values.length === 0) {
            return memo;
        } else if (values.length === 1) {
            return recursiveCompiler(values[0]);
        }
        var compiled = _.map(values, recursiveCompiler);
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
        case 'and':
            return inject(rest, '&&', 'true');
        case 'or':
            return inject(rest, '||', 'false');
        case '%':
            util.demand(rest.length === 2, "Modulo takes two arguments.");
            return "(" + recursiveCompiler(rest[0]) + "%" + recursiveCompiler(rest[1]) + ")";
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


    var fn = node.value[0].value,
        rest = _.tail(node.value);

    if (node.value[0].type === 'identifier' && fn.indexOf(".") === 0) {
        util.demand(rest.length >= 1, "Object call must have a target");
        return compile(rest[0]) + fn + util.mkString(_.map(_.tail(rest), compile), "(", ",", ")");
    } else if (node.value[0].type === 'identifier' && fn.indexOf("#") === 0) {
        util.demand(rest.length === 1, "property call must have a target and take no args");
        return compile(rest[0]) + '.' + fn.slice(1);
    }

    return compile(node.value[0]) + util.mkString(_.map(rest, compile), '(', ',', ')');
}


exports.compile = compileSexpressions;
