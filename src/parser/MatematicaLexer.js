// Generated from Matematica.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,8,66,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,1,4,1,5,4,5,51,8,5,11,5,12,5,52,1,6,3,6,56,8,6,1,6,1,6,1,7,4,7,61,
8,7,11,7,12,7,62,1,7,1,7,0,0,8,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,1,0,2,
3,0,48,57,65,90,97,122,2,0,9,9,32,32,68,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,
0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,1,17,
1,0,0,0,3,24,1,0,0,0,5,31,1,0,0,0,7,37,1,0,0,0,9,41,1,0,0,0,11,50,1,0,0,
0,13,55,1,0,0,0,15,60,1,0,0,0,17,18,5,67,0,0,18,19,5,114,0,0,19,20,5,101,
0,0,20,21,5,97,0,0,21,22,5,116,0,0,22,23,5,101,0,0,23,2,1,0,0,0,24,25,5,
68,0,0,25,26,5,101,0,0,26,27,5,108,0,0,27,28,5,101,0,0,28,29,5,116,0,0,29,
30,5,101,0,0,30,4,1,0,0,0,31,32,5,80,0,0,32,33,5,117,0,0,33,34,5,115,0,0,
34,35,5,104,0,0,35,36,5,32,0,0,36,6,1,0,0,0,37,38,5,80,0,0,38,39,5,111,0,
0,39,40,5,112,0,0,40,8,1,0,0,0,41,42,5,71,0,0,42,43,5,101,0,0,43,44,5,116,
0,0,44,45,5,95,0,0,45,46,5,84,0,0,46,47,5,111,0,0,47,48,5,112,0,0,48,10,
1,0,0,0,49,51,7,0,0,0,50,49,1,0,0,0,51,52,1,0,0,0,52,50,1,0,0,0,52,53,1,
0,0,0,53,12,1,0,0,0,54,56,5,13,0,0,55,54,1,0,0,0,55,56,1,0,0,0,56,57,1,0,
0,0,57,58,5,10,0,0,58,14,1,0,0,0,59,61,7,1,0,0,60,59,1,0,0,0,61,62,1,0,0,
0,62,60,1,0,0,0,62,63,1,0,0,0,63,64,1,0,0,0,64,65,6,7,0,0,65,16,1,0,0,0,
4,0,52,55,62,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class MatematicaLexer extends antlr4.Lexer {

    static grammarFileName = "Matematica.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'Create'", "'Delete'", "'Push '", "'Pop'", 
                         "'Get_Top'" ];
	static symbolicNames = [ null, null, null, null, null, null, "TOKEN", "NEWLINE", 
                          "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "TOKEN", "NEWLINE", 
                      "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

MatematicaLexer.EOF = antlr4.Token.EOF;
MatematicaLexer.T__0 = 1;
MatematicaLexer.T__1 = 2;
MatematicaLexer.T__2 = 3;
MatematicaLexer.T__3 = 4;
MatematicaLexer.T__4 = 5;
MatematicaLexer.TOKEN = 6;
MatematicaLexer.NEWLINE = 7;
MatematicaLexer.WS = 8;



