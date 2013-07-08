var _ = require('underscore');

function slice(what, from, to) {
    "use strict";
    return Array.prototype.slice.call(what, from, to);
}

// TODO(tyoverby) make it print useful things
// using the node info
function demand(cond, msg, node) {
    "use strict";
    msg = msg || "";

    if (!cond) {
        throw new Error(msg);
    }
    return 0;
}

function mkString(arr, start, sep, end) {
    "use strict";
    if (!sep) {
        sep = start;
    }

    var toReturn = start;
    _.forEach(_.initial(arr), function (elem) {
        toReturn += elem.toString();
        toReturn += sep;
    });

    if (arr.length !== 0) {
        toReturn += _.last(arr).toString();
    }
    toReturn += end;

    return toReturn;
}

exports.mkString = mkString;
exports.slice = slice;
exports.demand = demand;
