import antlr4 from 'antlr4';
import MatematicaListener from './parser/MatematicaListener';


export default class MatematicaListenerSimples extends MatematicaListener {
  enterPrograma(ctx) {
    console.debug('-------------------ENTER PROGRAMA-------------------');
    console.debug('ctx:', ctx);
    console.debug('ctx.getText():', ctx.getText());
  }
  exitPrograma(ctx) {
    console.debug('-------------------EXIT PROGRAMA-------------------');
    console.debug('ctx:', ctx);
    console.debug('ctx.getText():', ctx.getText());
  }
  enterExpressao(ctx) {
    console.debug('-------------------ENTER EXPRESSAO-------------------');
    console.debug('ctx:', ctx);
    console.debug('ctx.getText():', ctx.getText());
    console.debug('ctx.INT():', ctx.INT());
  }
  exitExpressao(ctx) {
    console.debug('-------------------EXIT EXPRESSAO-------------------');
    console.debug('ctx:', ctx);
    console.debug('ctx.getText():', ctx.getText());
  }
}