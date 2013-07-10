var util = require('./../util.js'),
    _ = require('underscore');

function compileLambda(node, compile) {
    "use strict";
    util.demand(node.value.length >= 3, "Lambda takes parameters for the arguments" +
        "and the body");

    var args = node.value[1].value,
        bodies = util.slice(node.value, 2);

    _.forEach(args, function (arg) {
        util.demand(arg.type === 'identifier', "All args to a Lambda must be identifiers.");
    });

    var build = "(function " + util.mkString(_.pluck(args, 'value'), '(', ',', ') {\n');

    _.forEach(_.initial(bodies), function (body) {
        build += compile(body) + ";\n";
    });

    build += "return " + compile(_.last(bodies)) + ";\n";

    return build + "})";
}

module.exports = compileLambda;