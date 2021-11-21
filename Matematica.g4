grammar Matematica;

programa: (expressao NEWLINE?)* EOF;
expressao:
	expressao '^' expressao
	| expressao ('*' | '/') expressao
	| expressao ('+' | '-') expressao
	| INT
	| INCOGNITA
	| '(' expressao ')';

NEWLINE: [\r\n]+ -> skip;
WS: [ \t]+ -> skip;
INT: [0-9]+;
INCOGNITA: [a-z];
