
var grammar = require('../grammar/grammar');
var fs = require('fs');
var comp = require('./recursiveCompiler');

function compile(file, callback){
    fs.readFile(file, "utf8", function (error, data) {
        if(error) { throw error; }
        var lexed = grammar.parse(data);
        comp.compile(lexed, callback);
    });
}

compile(process.argv[2], function(data){
    console.log("compilation finished with data: " + data);
});


module.exports = compile;
