var _ = require('underscore'),
    util = require('../util');

function compileSet(node, compile) {
    "use strict";
    util.demand(node.value.length === 3, "Set can only have 2 parameters.");
    util.demand(node.value[1].type === 'identifier', "The first argument in 'set' must be an identifier.");

    var build = node.value[1].value + " = " + compile(node.value[2]) + ";";
    return build;
}

module.exports = compileSet;
