"use strict";
/*
  Na "lib" é onde colocamos as bibliotecas com as quais vamos trabalhar. Por padrão, ele vem comentada, e por isso só vai trabalhar com os comandos mais básicos do JS.

  Quando comentado, ele adiciona automaticamente essas bibliotecas mostradas abaixo. Tanto faz escrevermos isso na lib ou não, pois por padrão ela já vem com esses valores.

  "lib": [
      "DOM",
      "ES5",
      "DOM.Iterable",
      "ScriptHost"
    ],
*/
var botao = document.querySelector("button");
botao.addEventListener('click', function () {
    console.log("clicou");
});
