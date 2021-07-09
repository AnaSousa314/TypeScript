/*
O watchMode basicamente faz a conversão do arquivo .ts em .js de forma mais dinâmica. Ou seja, toda a alteração que eu fizer no arquivo .ts será automaticamente feita no arquivo .js, sem precisar ficar executando o comando 'tsc nomeDoArquivo' toda vez.
Isso é feito através do comando abaixo no terminal:   
tsc script --watchMode
ou
tsc script.ts -w
*/
const nome: string = 'Ana';
console.log(nome)

function lalala(n1:number):string{
  return `O parametro era: ${n1}`
}

lalala(12)

