// Generated from Matematica.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MatematicaListener from './MatematicaListener.js';
const serializedATN = [4,1,8,46,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,1,0,1,0,1,0,4,0,19,8,0,11,0,12,0,20,1,0,1,0,1,1,1,1,
1,1,1,1,3,1,29,8,1,1,1,3,1,32,8,1,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,5,1,
5,1,6,1,6,1,6,0,0,7,0,2,4,6,8,10,12,0,0,43,0,14,1,0,0,0,2,28,1,0,0,0,4,33,
1,0,0,0,6,36,1,0,0,0,8,38,1,0,0,0,10,41,1,0,0,0,12,43,1,0,0,0,14,15,5,1,
0,0,15,16,3,6,3,0,16,18,5,7,0,0,17,19,3,2,1,0,18,17,1,0,0,0,19,20,1,0,0,
0,20,18,1,0,0,0,20,21,1,0,0,0,21,22,1,0,0,0,22,23,5,0,0,1,23,1,1,0,0,0,24,
29,3,8,4,0,25,29,3,10,5,0,26,29,3,12,6,0,27,29,3,4,2,0,28,24,1,0,0,0,28,
25,1,0,0,0,28,26,1,0,0,0,28,27,1,0,0,0,29,31,1,0,0,0,30,32,5,7,0,0,31,30,
1,0,0,0,31,32,1,0,0,0,32,3,1,0,0,0,33,34,5,2,0,0,34,35,3,6,3,0,35,5,1,0,
0,0,36,37,5,6,0,0,37,7,1,0,0,0,38,39,5,3,0,0,39,40,5,6,0,0,40,9,1,0,0,0,
41,42,5,4,0,0,42,11,1,0,0,0,43,44,5,5,0,0,44,13,1,0,0,0,3,20,28,31];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MatematicaParser extends antlr4.Parser {

    static grammarFileName = "Matematica.g4";
    static literalNames = [ null, "'Create'", "'Delete'", "'Push '", "'Pop'", 
                            "'Get_Top'" ];
    static symbolicNames = [ null, null, null, null, null, null, "TOKEN", 
                             "NEWLINE", "WS" ];
    static ruleNames = [ "programa", "funcao", "apagarPilha", "nome_pilha", 
                         "push", "pop", "get_Top" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MatematicaParser.ruleNames;
        this.literalNames = MatematicaParser.literalNames;
        this.symbolicNames = MatematicaParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MatematicaParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this.match(MatematicaParser.T__0);
	        this.state = 15;
	        this.nome_pilha();
	        this.state = 16;
	        this.match(MatematicaParser.NEWLINE);
	        this.state = 18; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 17;
	            this.funcao();
	            this.state = 20; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 60) !== 0));
	        this.state = 22;
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



	funcao() {
	    let localctx = new FuncaoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MatematicaParser.RULE_funcao);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.state = 24;
	            this.push();
	            break;
	        case 4:
	            this.state = 25;
	            this.pop();
	            break;
	        case 5:
	            this.state = 26;
	            this.get_Top();
	            break;
	        case 2:
	            this.state = 27;
	            this.apagarPilha();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 30;
	            this.match(MatematicaParser.NEWLINE);
	        }

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



	apagarPilha() {
	    let localctx = new ApagarPilhaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MatematicaParser.RULE_apagarPilha);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(MatematicaParser.T__1);
	        this.state = 34;
	        this.nome_pilha();
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



	nome_pilha() {
	    let localctx = new Nome_pilhaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MatematicaParser.RULE_nome_pilha);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(MatematicaParser.TOKEN);
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



	push() {
	    let localctx = new PushContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MatematicaParser.RULE_push);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(MatematicaParser.T__2);
	        this.state = 39;
	        this.match(MatematicaParser.TOKEN);
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



	pop() {
	    let localctx = new PopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MatematicaParser.RULE_pop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.match(MatematicaParser.T__3);
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



	get_Top() {
	    let localctx = new Get_TopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MatematicaParser.RULE_get_Top);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(MatematicaParser.T__4);
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


}

MatematicaParser.EOF = antlr4.Token.EOF;
MatematicaParser.T__0 = 1;
MatematicaParser.T__1 = 2;
MatematicaParser.T__2 = 3;
MatematicaParser.T__3 = 4;
MatematicaParser.T__4 = 5;
MatematicaParser.TOKEN = 6;
MatematicaParser.NEWLINE = 7;
MatematicaParser.WS = 8;

MatematicaParser.RULE_programa = 0;
MatematicaParser.RULE_funcao = 1;
MatematicaParser.RULE_apagarPilha = 2;
MatematicaParser.RULE_nome_pilha = 3;
MatematicaParser.RULE_push = 4;
MatematicaParser.RULE_pop = 5;
MatematicaParser.RULE_get_Top = 6;

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

	nome_pilha() {
	    return this.getTypedRuleContext(Nome_pilhaContext,0);
	};

	NEWLINE() {
	    return this.getToken(MatematicaParser.NEWLINE, 0);
	};

	EOF() {
	    return this.getToken(MatematicaParser.EOF, 0);
	};

	funcao = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncaoContext);
	    } else {
	        return this.getTypedRuleContext(FuncaoContext,i);
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



class FuncaoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MatematicaParser.RULE_funcao;
    }

	push() {
	    return this.getTypedRuleContext(PushContext,0);
	};

	pop() {
	    return this.getTypedRuleContext(PopContext,0);
	};

	get_Top() {
	    return this.getTypedRuleContext(Get_TopContext,0);
	};

	apagarPilha() {
	    return this.getTypedRuleContext(ApagarPilhaContext,0);
	};

	NEWLINE() {
	    return this.getToken(MatematicaParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MatematicaListener ) {
	        listener.enterFuncao(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MatematicaListener ) {
	        listener.exitFuncao(this);
		}
	}


}



class ApagarPilhaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MatematicaParser.RULE_apagarPilha;
    }

	nome_pilha() {
	    return this.getTypedRuleContext(Nome_pilhaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MatematicaListener ) {
	        listener.enterApagarPilha(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MatematicaListener ) {
	        listener.exitApagarPilha(this);
		}
	}


}



class Nome_pilhaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MatematicaParser.RULE_nome_pilha;
    }

	TOKEN() {
	    return this.getToken(MatematicaParser.TOKEN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MatematicaListener ) {
	        listener.enterNome_pilha(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MatematicaListener ) {
	        listener.exitNome_pilha(this);
		}
	}


}



class PushContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MatematicaParser.RULE_push;
    }

	TOKEN() {
	    return this.getToken(MatematicaParser.TOKEN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MatematicaListener ) {
	        listener.enterPush(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MatematicaListener ) {
	        listener.exitPush(this);
		}
	}


}



class PopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MatematicaParser.RULE_pop;
    }


	enterRule(listener) {
	    if(listener instanceof MatematicaListener ) {
	        listener.enterPop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MatematicaListener ) {
	        listener.exitPop(this);
		}
	}


}



class Get_TopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MatematicaParser.RULE_get_Top;
    }


	enterRule(listener) {
	    if(listener instanceof MatematicaListener ) {
	        listener.enterGet_Top(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MatematicaListener ) {
	        listener.exitGet_Top(this);
		}
	}


}




MatematicaParser.ProgramaContext = ProgramaContext; 
MatematicaParser.FuncaoContext = FuncaoContext; 
MatematicaParser.ApagarPilhaContext = ApagarPilhaContext; 
MatematicaParser.Nome_pilhaContext = Nome_pilhaContext; 
MatematicaParser.PushContext = PushContext; 
MatematicaParser.PopContext = PopContext; 
MatematicaParser.Get_TopContext = Get_TopContext; 
