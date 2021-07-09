//"noUnusedLocals" e "noUnusedParameters"

let nome: string = "Ana"; // variável global, mesmo que não seja usada, nenhum aviso será mostrado

/* function somar(n1:number ,n2:number, n3:number): number{
  //let nome: string = "Ana"; //variavel local, o erro é acusado
  return n1+n2;
} 
somar(10,15,20);

*/


//"noImplicitReturns":
function somar(n1:number ,n2:number){
  if (n1 > 10) {
    return n1+n2;
  }
} 
somar(10,15);

// não acusará erro se estiver assim. 

function subtrair(n1:number ,n2:number){
  if (n1 > 10) {
    return n1+n2;
  }else{
    return;
  }
} 
subtrair(10,15);