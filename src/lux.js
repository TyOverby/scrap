var fs = require('fs'),
    _ = require('underscore'),
    parser = require('../grammar/grammar'),
    compiler = require('../src/recursiveCompiler'),
    util = require('./util.js');

function compileFile(name) {
    "use strict";

    function endsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }

    util.demand(endsWith(name, ".lx"), "File must end in .lx.");
    var outName = name + ".js";

    fs.readFile(name, 'utf8', function (error, data) {
        var topLevel = parser.parse(data),
            compiled = _.map(topLevel, compiler.compileIter),
            merged = util.mkString(compiled, "// " + name + "\n", ";\n", "\n");

        fs.writeFile(outName, merged, function (err) {
            if (err) {
                throw err;
            }
            console.log("written to " + outName);
        });
    });
}

compileFile(process.argv[2]);


module.exports = compileFile;