function firstLetterUpperCase(name: string): string{
  let firstLetter = name.charAt(0).toUpperCase();
  //return 90
  return firstLetter +name.substring(1);
}

let nome = firstLetterUpperCase('ana');

//quando tipamos o retorno, geralmente (e mais correto) tipamos as entradas também. Caso contrário, ele aceitara um valor de qualquer tipo na entrada. Ex: 
/* 
function somar(n1,n2): number{return n1+n2} 

Ele aceitará receber strings, pois não está especificados os tipos de entrada, logo o Typescript não acusará erro algum.
let alguma = somar('ana','sousa')
*/ 
function somar(n1: number,n2: number):number{
  return n1+n2;
}

let alguma = somar(30,60)


function subtrair(n1: number,n2: number){
  return `${n1-n2}`
}

let res = subtrair(90,30)