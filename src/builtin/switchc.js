var _ = require('underscore'),
    util = require('../util');

function compileSwitch(node, compile){
    "use strict";

    var switchVal = node.value[0],
        pairs = node.value.slice(1);

    util.demand(pairs.length >= 1, "Switch pairs must contain some cases");
    util.demand(_.last(pairs).value[0].value === 'default', "Switch pairs must contain a default case");


    var build = "(function () {\n switch("+compile(node.value[0]) + "){\n";

    _.forEach(_.initial(pairs), function (pair){
        build += "case " + compile(pair.value[0]) + ": " + "return " + compile(pair.value[1]) + ";\n";
    });

    build += "default: " + compile(_.last(pairs).value[1]);

    return build + "\n}\n}())";
}




module.exports = compileSwitch;
