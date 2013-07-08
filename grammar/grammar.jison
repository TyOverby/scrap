%{
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
%}

%lex
%%

\s {}
"," {}
"("      { return '('; }
")"      { return ')'; }
"["      { return '['; }
"]"      { return ']'; }
"{"      { return '{'; }
"}"      { return '}'; }
":"      { return ':'; }
"'"      { return 'QUOTE'; }
[0-9]+"."[0-9]+([Ee][+-]?[0-9]+)? {return 'NUMBER';}
L?\"(\\.|[^\\"])*\" {return 'STRING'; }
[^(){}[\], :']+   { return 'IDENT'; }
<<EOF>>  { return 'EOF'; }

/lex

%%

file: list EOF { return $list; };

expression: IDENT { $$ = mkNode('identifier', $IDENT, @IDENT) }
          | STRING { $$ = mkNode('string', $STRING, @STRING)}
          | NUMBER { $$ = mkNode('number', $NUMBER, @NUMBER)}
          | sexpr { $$=$sexpr }
          | list_literal { $$ = $list_literal}
          | quote_ident {$$ = $quote_ident}
          | obj_literal {$$ = $obj_literal}
          ;

list: list expression {
        $$ = $list; $$.push($expression);
      }
    | expression {
        $$ = [$expression];
      }
    ;

sexpr: '(' list ')' { $$ = mkNode('sexpr', $list, @1, @3 )}
     | '(' ')' { $$ = mkNode('sexpr', [], @1, @2)}
     ;

list_literal: '[' list ']' { $$ = mkNode('list', $list, @1, @3) }
            | '[' ']'      { $$ = mkNode('list', emptyList(), @1, @2) }
            ;


key_value_pair: IDENT ':' expression {$$ = mkNode('key_value', mkPair($IDENT, $expression), @IDENT, @expression) }
              | quote_ident ':' expression {$$ = mkNode('key_value', mkPair($quote_ident, $expression), @quote_ident, @expression)}
              | STRING ':' expression {$$ = mkNode('key_value', mkPair( mkNode('string', $STRING, @1), $expression), @STRING, @expression)}
              ;

kv_pair_list : kv_pair_list key_value_pair {
                $$ = $kv_pair_list, $$.push($key_value_pair);
               }
             | key_value_pair {
                $$ = [$key_value_pair];
               }
             ;

obj_literal: '{' kv_pair_list '}' { $$ = mkNode('obj_lit', $kv_pair_list, @1, @3)}
           | '{' '}' {  $$ = mkNode('obj_lit', emptyList(), @1, @2)}
           ;


quote_ident : 'QUOTE' 'IDENT' {$$ = mkNode('quote_ident', $IDENT, @1, @2)} ;

