var util = require('./util.js'),
    _ = require('underscore'),
    letc = require('./let');

function compileSexpressions(node, recursiveCompiler) {
    switch(node.value[0].value){
        case 'let':
            return letc(node, recursiveCompiler);
            break;
        default:
            return compileFCall(node, recursiveCompiler);
    }
    return "FAIL! " + node.value[0];
}

function compileFCall(node, compile) {
    util.demand(node.value[0].type === 'identifier',
            node.type + " was expected to be an identifier.", node);

    var name = node.value[0].value,
        args = _.pluck(_.tail(node.value), 'value');

    return name + util.mkString(args, '(', ',', ')');
}



exports.compile = compileSexpressions;
