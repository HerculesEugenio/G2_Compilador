// Generated from Matematica.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\r<\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\t\u0006\t)\n\t\r\t\u000e\t*\u0003\t\u0003",
    "\t\u0003\n\u0006\n0\n\n\r\n\u000e\n1\u0003\n\u0003\n\u0003\u000b\u0006",
    "\u000b7\n\u000b\r\u000b\u000e\u000b8\u0003\f\u0003\f\u0002\u0002\r\u0003",
    "\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011",
    "\n\u0013\u000b\u0015\f\u0017\r\u0003\u0002\u0006\u0004\u0002\f\f\u000f",
    "\u000f\u0004\u0002\u000b\u000b\"\"\u0003\u00022;\u0003\u0002c|\u0002",
    ">\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002",
    "\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002",
    "\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002",
    "\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002",
    "\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002",
    "\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0003\u0019\u0003\u0002\u0002",
    "\u0002\u0005\u001b\u0003\u0002\u0002\u0002\u0007\u001d\u0003\u0002\u0002",
    "\u0002\t\u001f\u0003\u0002\u0002\u0002\u000b!\u0003\u0002\u0002\u0002",
    "\r#\u0003\u0002\u0002\u0002\u000f%\u0003\u0002\u0002\u0002\u0011(\u0003",
    "\u0002\u0002\u0002\u0013/\u0003\u0002\u0002\u0002\u00156\u0003\u0002",
    "\u0002\u0002\u0017:\u0003\u0002\u0002\u0002\u0019\u001a\u0007`\u0002",
    "\u0002\u001a\u0004\u0003\u0002\u0002\u0002\u001b\u001c\u0007,\u0002",
    "\u0002\u001c\u0006\u0003\u0002\u0002\u0002\u001d\u001e\u00071\u0002",
    "\u0002\u001e\b\u0003\u0002\u0002\u0002\u001f \u0007-\u0002\u0002 \n",
    "\u0003\u0002\u0002\u0002!\"\u0007/\u0002\u0002\"\f\u0003\u0002\u0002",
    "\u0002#$\u0007*\u0002\u0002$\u000e\u0003\u0002\u0002\u0002%&\u0007+",
    "\u0002\u0002&\u0010\u0003\u0002\u0002\u0002\')\t\u0002\u0002\u0002(",
    "\'\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*(\u0003\u0002\u0002",
    "\u0002*+\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002,-\b\t\u0002",
    "\u0002-\u0012\u0003\u0002\u0002\u0002.0\t\u0003\u0002\u0002/.\u0003",
    "\u0002\u0002\u000201\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u0002",
    "12\u0003\u0002\u0002\u000223\u0003\u0002\u0002\u000234\b\n\u0002\u0002",
    "4\u0014\u0003\u0002\u0002\u000257\t\u0004\u0002\u000265\u0003\u0002",
    "\u0002\u000278\u0003\u0002\u0002\u000286\u0003\u0002\u0002\u000289\u0003",
    "\u0002\u0002\u00029\u0016\u0003\u0002\u0002\u0002:;\t\u0005\u0002\u0002",
    ";\u0018\u0003\u0002\u0002\u0002\u0006\u0002*18\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class MatematicaLexer extends antlr4.Lexer {

    static grammarFileName = "Matematica.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'^'", "'*'", "'/'", "'+'", "'-'", "'('", 
                         "')'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          "NEWLINE", "WS", "INT", "INCOGNITA" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "NEWLINE", "WS", "INT", "INCOGNITA" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

MatematicaLexer.EOF = antlr4.Token.EOF;
MatematicaLexer.T__0 = 1;
MatematicaLexer.T__1 = 2;
MatematicaLexer.T__2 = 3;
MatematicaLexer.T__3 = 4;
MatematicaLexer.T__4 = 5;
MatematicaLexer.T__5 = 6;
MatematicaLexer.T__6 = 7;
MatematicaLexer.NEWLINE = 8;
MatematicaLexer.WS = 9;
MatematicaLexer.INT = 10;
MatematicaLexer.INCOGNITA = 11;



