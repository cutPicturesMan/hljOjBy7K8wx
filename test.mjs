import * as babel from "@babel/core";

const sourceCode = "let a = '23'";
const parsedAst = babel.parseSync(sourceCode, {
  parserOpts: { allowReturnOutsideFunction: true },
});
debugger
const res = babel.transformFromAstSync(
  parsedAst,
  sourceCode,
  {}
);
debugger

console.log(res);