var _ = require('underscore');

function slice(what, from, to){
    return Array.prototype.slice.call(what, from, to);
}

// TODO(tyoverby) make it print useful things
// using the node info
function demand(cond, msg, node) {
    msg = msg || "";

    if(!cond){
        throw msg;
    }
}

function mkString(arr, start, sep, end) {
    if(!sep)
        sep = start;

    var toReturn = start;
    _.forEach(_.initial(arr), function (elem){
        toReturn += elem.toString();
        toReturn += sep;
    });

    toReturn += _.last(arr).toString();
    toReturn += end;

    return toReturn;
}

exports.mkString = mkString;
exports.slice = slice;
exports.demand = demand;
