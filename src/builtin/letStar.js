var util = require('./../util'),
    _ = require('underscore');


function compileLetStar(node, compile) {
    "use strict";

    util.demand(node.value.length >= 3, "Let* takes parameters for the variables" +
        "and the bodies.", node);

    var vars = node.value[1].value;

    _.forEach(vars, function (vari) {
        util.demand(vari.value[0].type === 'identifier', "Key in let* is not an identifier.", vari);
    });

    var pairs = _.map(vars, function (vari) {
            return vari.value[0].value.toString() + " = " +  compile(vari.value[1]);
        }),
        bodies = util.slice(node.value, 2),
        build = "(function () {\n";

    build += util.mkString(pairs, 'var ', ',\n', ';\n');

    _.forEach(_.initial(bodies), function (body) {
        build += compile(body) + ";\n";
    });

    build += "return " + compile(_.last(bodies)) + ";\n";

    return build + "}())";
}

module.exports = compileLetStar;
