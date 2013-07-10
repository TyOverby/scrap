/* parser generated by jison 0.4.6 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var grammar = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"file":3,"list":4,"EOF":5,"expression":6,"IDENT":7,"STRING":8,"NUMBER":9,"sexpr":10,"list_literal":11,"quote_ident":12,"obj_literal":13,"(":14,")":15,"[":16,"]":17,"key_value_pair":18,":":19,"kv_pair_list":20,"{":21,"}":22,"QUOTE":23,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"IDENT",8:"STRING",9:"NUMBER",14:"(",15:")",16:"[",17:"]",19:":",21:"{",22:"}",23:"QUOTE"},
productions_: [0,[3,2],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[4,2],[4,1],[10,3],[10,2],[11,3],[11,2],[18,3],[18,3],[18,3],[20,2],[20,1],[13,3],[13,2],[12,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1: return $$[$0-1]; 
break;
case 2: this.$ = mkNode('identifier', $$[$0], _$[$0]) 
break;
case 3: this.$ = mkNode('string', $$[$0], _$[$0])
break;
case 4: this.$ = mkNode('number', $$[$0], _$[$0])
break;
case 5: this.$=$$[$0] 
break;
case 6: this.$ = $$[$0]
break;
case 7:this.$ = $$[$0]
break;
case 8:this.$ = $$[$0]
break;
case 9:
        this.$ = $$[$0-1]; this.$.push($$[$0]);
      
break;
case 10:
        this.$ = [$$[$0]];
      
break;
case 11: this.$ = mkNode('sexpr', $$[$0-1], _$[$0-2], _$[$0] )
break;
case 12: this.$ = mkNode('sexpr', [], _$[$0-1], _$[$0])
break;
case 13: this.$ = mkNode('list', $$[$0-1], _$[$0-2], _$[$0]) 
break;
case 14: this.$ = mkNode('list', emptyList(), _$[$0-1], _$[$0]) 
break;
case 15:this.$ = mkNode('key_value', mkPair(mkNode('identifier', $$[$0-2], _$[$0-2]), $$[$0]), _$[$0-2], _$[$0]) 
break;
case 16:this.$ = mkNode('key_value', mkPair($$[$0-2], $$[$0]), _$[$0-2], _$[$0])
break;
case 17:this.$ = mkNode('key_value', mkPair( mkNode('string', $$[$0-2], _$[$0-2]), $$[$0]), _$[$0-2], _$[$0])
break;
case 18:
                this.$ = $$[$0-1], this.$.push($$[$0]);
               
break;
case 19:
                this.$ = [$$[$0]];
               
break;
case 20: this.$ = mkNode('obj_lit', $$[$0-1], _$[$0-2], _$[$0])
break;
case 21:  this.$ = mkNode('obj_lit', emptyList(), _$[$0-1], _$[$0])
break;
case 22:this.$ = mkNode('quote_ident', $$[$0], _$[$0-1], _$[$0])
break;
}
},
table: [{3:1,4:2,6:3,7:[1,4],8:[1,5],9:[1,6],10:7,11:8,12:9,13:10,14:[1,11],16:[1,12],21:[1,14],23:[1,13]},{1:[3]},{5:[1,15],6:16,7:[1,4],8:[1,5],9:[1,6],10:7,11:8,12:9,13:10,14:[1,11],16:[1,12],21:[1,14],23:[1,13]},{5:[2,10],7:[2,10],8:[2,10],9:[2,10],14:[2,10],15:[2,10],16:[2,10],17:[2,10],21:[2,10],23:[2,10]},{5:[2,2],7:[2,2],8:[2,2],9:[2,2],14:[2,2],15:[2,2],16:[2,2],17:[2,2],21:[2,2],22:[2,2],23:[2,2]},{5:[2,3],7:[2,3],8:[2,3],9:[2,3],14:[2,3],15:[2,3],16:[2,3],17:[2,3],21:[2,3],22:[2,3],23:[2,3]},{5:[2,4],7:[2,4],8:[2,4],9:[2,4],14:[2,4],15:[2,4],16:[2,4],17:[2,4],21:[2,4],22:[2,4],23:[2,4]},{5:[2,5],7:[2,5],8:[2,5],9:[2,5],14:[2,5],15:[2,5],16:[2,5],17:[2,5],21:[2,5],22:[2,5],23:[2,5]},{5:[2,6],7:[2,6],8:[2,6],9:[2,6],14:[2,6],15:[2,6],16:[2,6],17:[2,6],21:[2,6],22:[2,6],23:[2,6]},{5:[2,7],7:[2,7],8:[2,7],9:[2,7],14:[2,7],15:[2,7],16:[2,7],17:[2,7],21:[2,7],22:[2,7],23:[2,7]},{5:[2,8],7:[2,8],8:[2,8],9:[2,8],14:[2,8],15:[2,8],16:[2,8],17:[2,8],21:[2,8],22:[2,8],23:[2,8]},{4:17,6:3,7:[1,4],8:[1,5],9:[1,6],10:7,11:8,12:9,13:10,14:[1,11],15:[1,18],16:[1,12],21:[1,14],23:[1,13]},{4:19,6:3,7:[1,4],8:[1,5],9:[1,6],10:7,11:8,12:9,13:10,14:[1,11],16:[1,12],17:[1,20],21:[1,14],23:[1,13]},{7:[1,21]},{7:[1,25],8:[1,27],12:26,18:24,20:22,22:[1,23],23:[1,13]},{1:[2,1]},{5:[2,9],7:[2,9],8:[2,9],9:[2,9],14:[2,9],15:[2,9],16:[2,9],17:[2,9],21:[2,9],23:[2,9]},{6:16,7:[1,4],8:[1,5],9:[1,6],10:7,11:8,12:9,13:10,14:[1,11],15:[1,28],16:[1,12],21:[1,14],23:[1,13]},{5:[2,12],7:[2,12],8:[2,12],9:[2,12],14:[2,12],15:[2,12],16:[2,12],17:[2,12],21:[2,12],22:[2,12],23:[2,12]},{6:16,7:[1,4],8:[1,5],9:[1,6],10:7,11:8,12:9,13:10,14:[1,11],16:[1,12],17:[1,29],21:[1,14],23:[1,13]},{5:[2,14],7:[2,14],8:[2,14],9:[2,14],14:[2,14],15:[2,14],16:[2,14],17:[2,14],21:[2,14],22:[2,14],23:[2,14]},{5:[2,22],7:[2,22],8:[2,22],9:[2,22],14:[2,22],15:[2,22],16:[2,22],17:[2,22],19:[2,22],21:[2,22],22:[2,22],23:[2,22]},{7:[1,25],8:[1,27],12:26,18:31,22:[1,30],23:[1,13]},{5:[2,21],7:[2,21],8:[2,21],9:[2,21],14:[2,21],15:[2,21],16:[2,21],17:[2,21],21:[2,21],22:[2,21],23:[2,21]},{7:[2,19],8:[2,19],22:[2,19],23:[2,19]},{19:[1,32]},{19:[1,33]},{19:[1,34]},{5:[2,11],7:[2,11],8:[2,11],9:[2,11],14:[2,11],15:[2,11],16:[2,11],17:[2,11],21:[2,11],22:[2,11],23:[2,11]},{5:[2,13],7:[2,13],8:[2,13],9:[2,13],14:[2,13],15:[2,13],16:[2,13],17:[2,13],21:[2,13],22:[2,13],23:[2,13]},{5:[2,20],7:[2,20],8:[2,20],9:[2,20],14:[2,20],15:[2,20],16:[2,20],17:[2,20],21:[2,20],22:[2,20],23:[2,20]},{7:[2,18],8:[2,18],22:[2,18],23:[2,18]},{6:35,7:[1,4],8:[1,5],9:[1,6],10:7,11:8,12:9,13:10,14:[1,11],16:[1,12],21:[1,14],23:[1,13]},{6:36,7:[1,4],8:[1,5],9:[1,6],10:7,11:8,12:9,13:10,14:[1,11],16:[1,12],21:[1,14],23:[1,13]},{6:37,7:[1,4],8:[1,5],9:[1,6],10:7,11:8,12:9,13:10,14:[1,11],16:[1,12],21:[1,14],23:[1,13]},{7:[2,15],8:[2,15],22:[2,15],23:[2,15]},{7:[2,16],8:[2,16],22:[2,16],23:[2,16]},{7:[2,17],8:[2,17],22:[2,17],23:[2,17]}],
defaultActions: {15:[2,1]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

    function mkNode(type, val, start, end){
        return {
            "type": type,
            "value": val,
            "start": start,
            "end": end
        };
    }

    function mkPair(v1, v2){
        return {
            "v1": v1,
            "v2": v2
        };
    }

    function emptyList(){
        return [];
    }

    function emptyObj(){
        return {};
    }
/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:
break;
case 1:
break;
case 2: return 14; 
break;
case 3: return 15; 
break;
case 4: return 16; 
break;
case 5: return 17; 
break;
case 6: return 21; 
break;
case 7: return 22; 
break;
case 8: return 19; 
break;
case 9: return 23; 
break;
case 10:return 9;
break;
case 11:return 8; 
break;
case 12: return 7; 
break;
case 13: return 5; 
break;
}
},
rules: [/^(?:\s)/,/^(?:,)/,/^(?:\()/,/^(?:\))/,/^(?:\[)/,/^(?:\])/,/^(?:\{)/,/^(?:\})/,/^(?::)/,/^(?:')/,/^(?:[0-9]+\.[0-9]+([Ee][+-]?[0-9]+)?)/,/^(?:L?"(\\.|[^\\"])*")/,/^(?:[^(){}[\], :']+)/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = grammar;
exports.Parser = grammar.Parser;
exports.parse = function () { return grammar.parse.apply(grammar, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}