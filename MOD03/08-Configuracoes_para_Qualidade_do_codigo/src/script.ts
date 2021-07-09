/*
"noUnusedLocals": true - ele vai avisar quando o código possuir uma variável que não está sendo utilizada. Mas ele só informa em variáveis LOCAIS, ele não avisa para variáveis GLOBAIS, pois eu posso não estar usando essa variável naquele arquivo em que ela está presente, mas pode ser que eu a use em outro arquivo em que ela tenha sido importada. Recomenda usar

"noUnusedParameters": true - muito parecido com o "noUnusedLocals", só que para parâmetros de função. Mesmo que o parâmetro receba um valor, se ele não estiver fazendo nada na função, será dado um aviso mesmo que ele seja um parâmetro opcional. Recomenda usar

"noImplicitReturns": true - caso tenha uma função que tenha um return implicito, ou seja, pode ser que algo seja retornado pode ser que não. Ele irá dar um aviso. Não é recomendado usar

Exemplos no outros.ts
*/

const botao = document.querySelector("button") as HTMLButtonElement;

botao.addEventListener('click',()=>{
  console.log("clicou")
});

