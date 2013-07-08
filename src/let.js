var _ = require('underscore'),
    util = require('./util');

function compileLet(node, compil){
    util.demand(node.value.length >= 3,
            "Let takes parameters for the variables " +
            "and the body", node);

    var vars = node.value[1].value;

    _.forEach(vars, function (vari) {
        //util.demand(vari.type === "ident", "Key in let is not an identifier.", node);
    });

    var body = node.value[2],
        names = _.map(vars, function (vari){ return vari.value[0].value }),
        values = _.map(vars, function (vari){ return compil(vari.value[1]) }),
        bodies = util.slice(node.value, 2);


    var build = "(function " + util.mkString(names, '(', ',', ') {');

    _.forEach(_.initial(bodies), function(body){
        build += compil(body) + ";\n";
    });

    build += "return " + compil(_.last(bodies)) + ";\n";

    return build + "}" + util.mkString(values, '(', ',', ')') + ")";
}

module.exports = compileLet;
