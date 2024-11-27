import antlr4 from 'antlr4';
import MatematicaListener from './parser/MatematicaListener';
import MatematicaParser from './parser/MatematicaParser';


export default class MatematicaListenerCompleto extends MatematicaListener {
  constructor() {
    super();
    this.expressoes = [];
    
  }
  enterPrograma(ctx) {
    ctx.expressoes = [];
    
    
  }
  exitPrograma(ctx) {
    this.expressoes = ctx.expressoes;
    
  }
  enterFuncao(ctx) {
    
  }

  exitFuncao(ctx) {
    
  }
  
  enterApagarPilha(ctx){

  }
  exitApagarPilha(ctx){

  }
  enterNome_pilha(ctx){

  }
  exitNome_pilha(ctx){
    console.log("Nome_Pilha--", ctx.getText());
  }
  enterPush(ctx){
    console.log("Push--", ctx.getText());
  }
    
  exitPush(ctx){
    
  }
  enterPop(ctx){
    console.log("Pop--", ctx.getText());
  }
  exitPop(ctx){

  }
  enterGet_Top(ctx){
    
  }
  exitGet_Top(ctx){
    console.log("Get_top--", ctx.getText());
  }

}