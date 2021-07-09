/*
  outDir - no tsconfig é onde eu especifico para onde ele deve mandar os arquivos compilados/convertidos para JS.
  "outDir": "./public/assets/js",

  rootDir - é a mesma coisa de se usar o "include", no caso é onde eu coloco a pasta de origem dos arquivos. Onde colocamos a origem dos arquivos que devem ser compilados/convertidos.

  "rootDir": "./src",

  No caso quando fizermos o comando tsc ele fará uma cópia do que está no rootDir convertida para .js.
*/

const botao = document.querySelector("button") as HTMLButtonElement;

botao.addEventListener('click',()=>{
  console.log("clicou")
});

