/* 
  O retorno "void" é quando uma função vai cumprir seu papel, ou seja, ela receberá os parametros, fará algo com eles, mas não retornará nada. 
*/

function removerElemento(el: HTMLElement): void{
  if(el.classList){
    return; // se colocar return "bbb" dará erro
  }
  //processo de remoção do elemento da tela
  el.remove();
  // return 'caaaa' // isso dará erro pq já foi declarado que o retorno da função é void
  return; //ñ dá erro pq ñ está retornando nada
}

removerElemento(document.getElementById('teste'));


/* Agora, quando eu crio um type que tem o void, eu quero dizer que eu não espero nenhum um tipo de retorno, mas isso não significa que a função que tiver esse type não poderá retornar nada. Ela pode retornar, só não esperado que retorne. O TS não acusará nenhum tipo de erro no que for retornado pq ele não espera que a função retorne algo neste caso.
Como mostrado no exemplo abaixo
*/
type QualquerFuncao = ()=> void;

const algo: QualquerFuncao = ()=>{
  return "bla bla";
}


algo();