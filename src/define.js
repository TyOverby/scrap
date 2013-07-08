var util = require('./util.js'),
    _ = require('underscore');

function compileDefine(node, compile) {
    "use strict";
    util.demand(node.value.length === 3, "Demand takes 3 arguments", node);
    util.demand(node.value[1].type === 'identifier');

    var name = node.value[1].value,
        predef;
    if (name.indexOf('this.') !== -1) {
        predef = "";
    } else {
        predef = "var ";
    }

    return predef + name + " = " + compile(node.value[2]) + ";";
}

module.exports = compileDefine;
