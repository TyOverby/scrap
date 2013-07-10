var _ = require('underscore'),
    util = require('../util');

function compileLet(node, compile) {
    "use strict";

    util.demand(node.value.length >= 3,
        "Let takes parameters for the variables " +
            "and the body", node);

    var vars = node.value[1].value;

    _.forEach(vars, function (vari) {
        util.demand(vari.value[0].type === 'identifier', "Key" + JSON.stringify(vari.value[0]) +
            " in let is not an identifier.", vari);
    });

    var names = _.map(vars, function (vari) {
            return vari.value[0].value;
        }),
        values = _.map(vars, function (vari) {
            return compile(vari.value[1]);
        }),
        bodies = util.slice(node.value, 2);


    var build = "(function " + util.mkString(names, '(', ',', ') {\n');

    _.forEach(_.initial(bodies), function (body) {
        build += compile(body) + ";\n";
    });

    build += "return " + compile(_.last(bodies)) + ";\n";

    return build + "}" + util.mkString(values, '(', ',', ')') + ")";
}

module.exports = compileLet;
