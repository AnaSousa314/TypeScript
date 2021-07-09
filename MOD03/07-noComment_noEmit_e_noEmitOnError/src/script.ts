/*
  "removeComments":true - serve para tirarmos todos os comentários do código quando ele for compilado/convertido para .js. Por padrão quando ele está comentado ele está false. Recomenda usar.

  "noEmit":true - serve para não gerar os arquivos compilados/convertidos. Ou seja, se eu der um tsc ele não criará nenhum arquivo .js. Isso é muito usado quando eu só quero melhorar meu código, saber quais erros ele possui. Tem pouca utilidade.

  "noEmitOnError": true - por padrão ela nem aparece no tsconfig, podemos acrescenta-lá logo após o "noEmit". Serve para que a compilação/conversão não seja feita se o arquivo .ts tiver algum erro. Observe que ele não nenhum arquivo mesmo que somente 1 apresente erro. Recomenda usar.
*/

const botao = document.querySelector("button") as HTMLButtonElement;

botao.addEventListener('click',()=>{
  console.log("clicou")
});

