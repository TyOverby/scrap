var util = require('../util.js'),
    _ = require('underscore');

function compileIf(node, compile) {
    "use strict";
    util.demand(node.value.length === 4, "An if block takes a condition, and two results.");
    var cond = compile(node.value[1]),
        ife = compile(node.value[2]),
        elsee = compile(node.value[3]);

    return "((" + cond + ")?(" + ife + "):(" + elsee + "))";
}

module.exports = compileIf;