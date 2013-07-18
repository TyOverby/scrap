var _ = require('underscore'),
    sexpr = require('./sexpression'),
    util = require('./util.js'),
    parser = require('../grammar/grammar.js');

function compile(prog) {
    "use strict";

    var parsedExprs = parser.parse(prog);
    return _.map(parsedExprs, compileIter).join("\n");
}

function transformIdent(ident) {
    "use strict";


    function genFolder(op, memo) {
        return "(function (a, b) {return (a||" + memo + ")" + op + "(b || " + memo + ");})";
    }

    switch (ident) {
        case '+':
            return genFolder('+', '0');
        case '-':
            return genFolder('-', '0');
        case '*':
            return genFolder('*', '1');
        case '/':
            return genFolder('/', '1');
        case '%':
            return genFolder('%', '1');
        case 'and':
            return genFolder('&&', 'true');
        case 'or':
            return genFolder('||', 'false');
    }

    if (ident.indexOf('#') === 0) {
        return "(function (a) {return a['" + ident.slice(1) + "'];})";
    }

    if(ident.indexOf('.') === 0) {
        return "(function () { return arguments[0]['"+ident.slice(1)+"'].apply(Array.prototype.slice.call(arguments,1)); })";
    }

    var point = ident.indexOf('-');
    if (point === -1) {
        return ident;
    }

    ident = ident.substring(0, point) +
        ident[point + 1].toUpperCase() +
        ident.substring(point + 2, ident.length);
    return transformIdent(ident);
}

function compileIter(node) {
    "use strict";
    switch (node.type) {
        case 'number':
            return node.value;
        case 'string':
            return node.value;
        case 'identifier':
            return transformIdent(node.value);
        case 'quote_ident':
            return "'" + node.value + "'";
        case 'sexpr':
            return parseSExpr(node);
        case 'list':
            return util.mkString(_.map(node.value, compileIter), '[', ',', ']');
        case 'obj_lit':
            return util.mkString(_.map(node.value, function (kvp) {
                return compileIter(kvp.value.v1) + ':' + compileIter(kvp.value.v2);
            }), '{', ',', '}');

    }
    return "FAIL!: " + JSON.stringify(node) + " could not be matched.";
}

if (typeof window !== 'undefined') {
    window.compile = compile;
}

function parseSExpr(node) {
    "use strict";
    if (node.value.length === 0) {
        throw "No 0 length s expressions allowed";
    }
    return sexpr.compile(node, compileIter);
}

exports.transformIdent = transformIdent;
exports.compileIter = compileIter;

