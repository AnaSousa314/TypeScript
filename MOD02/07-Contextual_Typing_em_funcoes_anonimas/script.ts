/* O Typescript verifica o contexto da sua variavel/array e determina qual é o seu tipo, mesmo que voce não o declare, isso se chama Contextual Typing */

let names = ['ana','joao','pedro','joana',90];

names.forEach(function(nome){
  //Se colocamos só essa linha de código, dará erro, pois o Typescript assumiu que o array names é um array de strings
  // console.log(nome.toUpperCase());

  // Tratando o que será feito com os parametros de entrada do tipo number e string, o typescript entende quais são os tipos do array e não acusa erro
  if(typeof nome === 'string'){
    console.log(nome.toUpperCase());
  }else{
    console.log(nome)
  }
});


