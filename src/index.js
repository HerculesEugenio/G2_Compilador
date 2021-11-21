import antlr4 from 'antlr4';
import MatematicaLexer from './parser/MatematicaLexer';
import MatematicaParser from './parser/MatematicaParser';
import MatematicaListenerSimples from './MatematicaListenerSimples';
import MatematicaListenerCompleto from './MatematicaListenerCompleto';

export let parse = (input) => {
  const stream = new antlr4.InputStream(input);
  const lexer = new MatematicaLexer(stream);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new MatematicaParser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.programa();

  /* usando o MatematicaListenerSimples */
  /*
  const listener = new MatematicaListenerSimples();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
  return null;
  */

  /* usando o MatematicaListenerCompleto */
  const listener = new MatematicaListenerCompleto();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
  return listener.expressoes;
}
