/* 
Podemos criar um type para funções.
No caso abaixo o type MathFunction especifica que a função que for desse tipo deverá receber dois parâmetros do tipo number, e retornará um number.
*/

type MathFunction = (n1: number, n2: number) => number; //retorno number

const somar: MathFunction = (n1,n2)=>n1+n2;

somar(3,4);

const subtrair: MathFunction =(n1,n2)=>n1-n2;

const multiplicar: MathFunction =(n1,n2)=>n1*n2;

const dividir: MathFunction =(n1,n2)=>{
  return n1/n2;
}


