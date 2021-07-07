// Quando criamos um type que nao existe no TS, criamos o tipo com o nome em PascalCase
type NomeCompleto = string;

let nome: NomeCompleto = 'Ana';

// Criamos types proprios normalmente quando queremos simplificar o código, por exemplo (e mais comum) em objetos.

// Segundo quando temos um type que é replicável em outros lugares em nosso código. Como no exemplo abaixo. Podemos usar no retorno da função também.

type Idade = string | number;

let idade: Idade = 90;

function mostrarIdade(i: Idade): Idade{
  return i
}


// Deixa o código mais simples, principlamente com objetos

// Através de type
// type User = {
//   nome: string,
//   idade: number
// }

// Através de interface
interface User {
     nome: string,
     //idade: number
   }

function resumo(usuario: User){
  return `Olá ${usuario.nome}, você tem ${usuario.idade} anos`;
}

resumo({
  nome: 'Ana',
  idade: 90
})


// Outra forma de se criar types é através de interfaces. A Diferença é que com o type(que parece mais uma variável), uma vez criado, ele não é alterável, não conseguimos colocar propriedades novas nele, já com interface(que parece mais uma função) sim.

// O type não aceita isso. Ex.:
// Ele já foi criado lá em cima 
interface User{
  idade: number
}

