var _ = require('underscore'),
    sexpr = require('./sexpression'),
    util = require('./util.js');

function compile(node, callback){
    callback(compileIter(node));
}

function transformIdent(ident){
    var point = ident.indexOf('-');
    if(point === -1) {
        return ident;
    } else {
        ident = ident.substring(0, point) +
            ident[point+1].toUpperCase() +
            ident.substring(point+2, ident.length);
        return transformIdent(ident);
    }
}

function compileIter(node){
    switch(node.type){
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
            return util.mkString(_.map(node.value, function(kvp){
                return compileIter(kvp.value.v1) + ':' + compileIter(kvp.value.v2);
            }),'{', ',', '}');

    }
    return "FAIL!: " + JSON.stringify(node) + " could not be matched.";
}

function parseSExpr(node){
    if(node.value.length === 0)
        throw "No 0 length s expressions allowed";
    return sexpr.compile(node, compileIter);
}

exports.transformIdent = transformIdent;
exports.compileIter = compileIter;

