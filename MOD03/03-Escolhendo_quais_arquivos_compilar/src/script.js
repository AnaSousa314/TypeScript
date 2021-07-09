"use strict";
/*

Podemos colocar ao final do objedto tsconfig um "exclude". Ele serve para colocarmos arquivos que não queremos que sejão compilados.

"exclude":[
  "src/outro.ts",
  "*.dev.ts",
  "node_modules"
]

Ele já exclui a pasta node_modules como padrão, o acima é só para exemplificar que podemos excluir uma pasta inteira de ser compilada.

Podemos usar também o "include", nele colocamos apenas os arquivos que queremos que sejam executados. Com isso o TS entende que todos os outros arquivos que não estão dentro do "include" não devem ser compilados.

"include":[
  "src/script.ts",
  "src/*"
]

"src/*" - executará somente todos os arquivos que estejam dentro da pasta src.
*/ 
