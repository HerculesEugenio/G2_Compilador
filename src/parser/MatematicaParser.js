// Generated from Matematica.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MatematicaListener from './MatematicaListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\r)\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002",
    "\u0003\u0002\u0005\u0002\t\n\u0002\u0007\u0002\u000b\n\u0002\f\u0002",
    "\u000e\u0002\u000e\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u0003\u0019\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003",
    "$\n\u0003\f\u0003\u000e\u0003\'\u000b\u0003\u0003\u0003\u0002\u0003",
    "\u0004\u0004\u0002\u0004\u0002\u0004\u0003\u0002\u0004\u0005\u0003\u0002",
    "\u0006\u0007\u0002-\u0002\f\u0003\u0002\u0002\u0002\u0004\u0018\u0003",
    "\u0002\u0002\u0002\u0006\b\u0005\u0004\u0003\u0002\u0007\t\u0007\n\u0002",
    "\u0002\b\u0007\u0003\u0002\u0002\u0002\b\t\u0003\u0002\u0002\u0002\t",
    "\u000b\u0003\u0002\u0002\u0002\n\u0006\u0003\u0002\u0002\u0002\u000b",
    "\u000e\u0003\u0002\u0002\u0002\f\n\u0003\u0002\u0002\u0002\f\r\u0003",
    "\u0002\u0002\u0002\r\u000f\u0003\u0002\u0002\u0002\u000e\f\u0003\u0002",
    "\u0002\u0002\u000f\u0010\u0007\u0002\u0002\u0003\u0010\u0003\u0003\u0002",
    "\u0002\u0002\u0011\u0012\b\u0003\u0001\u0002\u0012\u0019\u0007\f\u0002",
    "\u0002\u0013\u0019\u0007\r\u0002\u0002\u0014\u0015\u0007\b\u0002\u0002",
    "\u0015\u0016\u0005\u0004\u0003\u0002\u0016\u0017\u0007\t\u0002\u0002",
    "\u0017\u0019\u0003\u0002\u0002\u0002\u0018\u0011\u0003\u0002\u0002\u0002",
    "\u0018\u0013\u0003\u0002\u0002\u0002\u0018\u0014\u0003\u0002\u0002\u0002",
    "\u0019%\u0003\u0002\u0002\u0002\u001a\u001b\f\b\u0002\u0002\u001b\u001c",
    "\u0007\u0003\u0002\u0002\u001c$\u0005\u0004\u0003\t\u001d\u001e\f\u0007",
    "\u0002\u0002\u001e\u001f\t\u0002\u0002\u0002\u001f$\u0005\u0004\u0003",
    "\b !\f\u0006\u0002\u0002!\"\t\u0003\u0002\u0002\"$\u0005\u0004\u0003",
    "\u0007#\u001a\u0003\u0002\u0002\u0002#\u001d\u0003\u0002\u0002\u0002",
    "# \u0003\u0002\u0002\u0002$\'\u0003\u0002\u0002\u0002%#\u0003\u0002",
    "\u0002\u0002%&\u0003\u0002\u0002\u0002&\u0005\u0003\u0002\u0002\u0002",
    "\'%\u0003\u0002\u0002\u0002\u0007\b\f\u0018#%"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class MatematicaParser extends antlr4.Parser {

    static grammarFileName = "Matematica.g4";
    static literalNames = [ null, "'^'", "'*'", "'/'", "'+'", "'-'", "'('", 
                            "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "NEWLINE", "WS", "INT", "INCOGNITA" ];
    static ruleNames = [ "programa", "expressao" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MatematicaParser.ruleNames;
        this.literalNames = MatematicaParser.literalNames;
        this.symbolicNames = MatematicaParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.expressao_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expressao_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 6);
    		case 1:
    			return this.precpred(this._ctx, 5);
    		case 2:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MatematicaParser.RULE_programa);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 10;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MatematicaParser.T__5) | (1 << MatematicaParser.INT) | (1 << MatematicaParser.INCOGNITA))) !== 0)) {
	            this.state = 4;
	            this.expressao(0);
	            this.state = 6;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===MatematicaParser.NEWLINE) {
	                this.state = 5;
	                this.match(MatematicaParser.NEWLINE);
	            }

	            this.state = 12;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 13;
	        this.match(MatematicaParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expressao(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressaoContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, MatematicaParser.RULE_expressao, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case MatematicaParser.INT:
	            this.state = 16;
	            this.match(MatematicaParser.INT);
	            break;
	        case MatematicaParser.INCOGNITA:
	            this.state = 17;
	            this.match(MatematicaParser.INCOGNITA);
	            break;
	        case MatematicaParser.T__5:
	            this.state = 18;
	            this.match(MatematicaParser.T__5);
	            this.state = 19;
	            this.expressao(0);
	            this.state = 20;
	            this.match(MatematicaParser.T__6);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 35;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 33;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressaoContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, MatematicaParser.RULE_expressao);
	                    this.state = 24;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 25;
	                    this.match(MatematicaParser.T__0);
	                    this.state = 26;
	                    this.expressao(7);
	                    break;

	                case 2:
	                    localctx = new ExpressaoContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, MatematicaParser.RULE_expressao);
	                    this.state = 27;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 28;
	                    _la = this._input.LA(1);
	                    if(!(_la===MatematicaParser.T__1 || _la===MatematicaParser.T__2)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 29;
	                    this.expressao(6);
	                    break;

	                case 3:
	                    localctx = new ExpressaoContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, MatematicaParser.RULE_expressao);
	                    this.state = 30;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 31;
	                    _la = this._input.LA(1);
	                    if(!(_la===MatematicaParser.T__3 || _la===MatematicaParser.T__4)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 32;
	                    this.expressao(5);
	                    break;

	                } 
	            }
	            this.state = 37;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

MatematicaParser.EOF = antlr4.Token.EOF;
MatematicaParser.T__0 = 1;
MatematicaParser.T__1 = 2;
MatematicaParser.T__2 = 3;
MatematicaParser.T__3 = 4;
MatematicaParser.T__4 = 5;
MatematicaParser.T__5 = 6;
MatematicaParser.T__6 = 7;
MatematicaParser.NEWLINE = 8;
MatematicaParser.WS = 9;
MatematicaParser.INT = 10;
MatematicaParser.INCOGNITA = 11;

MatematicaParser.RULE_programa = 0;
MatematicaParser.RULE_expressao = 1;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MatematicaParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(MatematicaParser.EOF, 0);
	};

	expressao = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressaoContext);
	    } else {
	        return this.getTypedRuleContext(ExpressaoContext,i);
	    }
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MatematicaParser.NEWLINE);
	    } else {
	        return this.getToken(MatematicaParser.NEWLINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MatematicaListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MatematicaListener ) {
	        listener.exitPrograma(this);
		}
	}


}



class ExpressaoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MatematicaParser.RULE_expressao;
    }

	INT() {
	    return this.getToken(MatematicaParser.INT, 0);
	};

	INCOGNITA() {
	    return this.getToken(MatematicaParser.INCOGNITA, 0);
	};

	expressao = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressaoContext);
	    } else {
	        return this.getTypedRuleContext(ExpressaoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MatematicaListener ) {
	        listener.enterExpressao(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MatematicaListener ) {
	        listener.exitExpressao(this);
		}
	}


}




MatematicaParser.ProgramaContext = ProgramaContext; 
MatematicaParser.ExpressaoContext = ExpressaoContext; 
