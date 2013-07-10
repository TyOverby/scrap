var _ = require('underscore'),
    util = require('../util');

function compileCond(node, compile) {
    "use strict";

    util.demand(node.value.length >= 2, "There must be at least two parts to a cond statement");

    var pairs = node.value.slice(1),
        first = _.first(pairs),
        rest = _.rest(pairs);

    _.forEach(pairs, function (pair) {
        util.demand(pair.type === 'sexpr', "Values inside of a cond statement must be an s-expression");
        util.demand(pair.value.length === 2, "Values inside of a cond statement must be a pair");
    });

    var build = "(function () {\n";

    build += "if (" + compile(first.value[0]) + ") {\n" +
        "return " + compile(first.value[1]) + ";\n} ";

    _.forEach(rest, function (pair) {
        build += "else if (" + compile(pair.value[0]) + ") {\nreturn " +
            compile(pair.value[1]) + ";\n} ";
    });

    build += "else {\nthrow new Error(\"No Match Found. always terminate with a 'true'\");\n}";
    return build + "\n}())";
}

module.exports = compileCond;