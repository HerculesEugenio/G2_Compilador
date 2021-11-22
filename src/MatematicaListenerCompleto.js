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
  enterExpressao(ctx) {
    if (ctx.INT() != null) {
      ctx.valor = parseInt(ctx.INT().getText());
    } else {
      ctx.valor = null;
    }
  }
  exitExpressao(ctx) {
    if (ctx.children && ctx.children.length == 3) {
      const left = ctx.children[0];
      const op = ctx.children[1].getText();
      const right = ctx.children[2];
      let valor = null;
      if (left.getText() == '(') {
        valor = ctx.children[1].valor;
      } else {
        const operando1 = left.valor;
        const operando2 = right.valor;
        switch (op) {
          case '^':
            valor = Math.pow(operando1, operando2);
            break;
          case '*':
            valor = operando1 * operando2;
            break;
          case '/':
            valor = operando1 / operando2;
            break;
          case '+':
            valor = operando1 + operando2;
            break;
          case '-':
            valor = operando1 - operando2;
            break;
        }
      }
      ctx.valor = valor;
    }
    if (ctx.valor != null && ctx.parentCtx instanceof MatematicaParser.ProgramaContext) {
      ctx.parentCtx.expressoes.push({
        'expressao': ctx.getText(),
        'valor': ctx.valor
      });
    }
  }
}