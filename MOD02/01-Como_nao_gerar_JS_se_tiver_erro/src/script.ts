/* Se deixarmos a pagina script.js também aberta no editor, aparecerá vários erros no arquivo .ts */
let num1 = document.getElementById("numero1") as HTMLInputElement;
let num2 = document.getElementById("numero2") as HTMLInputElement;
let btn = document.getElementById("calcular")
let res = document.getElementById("resultado")



function calcular(n1: number,n2: number){
    return n1 + n2;
}

btn.addEventListener("click",function(){
  res.innerHTML= calcular(+num1.value, +num2.value).toString();
});

/* 
Para o typescript só gerar o arquivo js se nao tiver nenhum erro no arquivo .ts, basta ao executar o comando, faze-lo dessa forma:
tsc src/script.ts --noEmitOnError
*/
