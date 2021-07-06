function resumo(usuario:{nome:string,idade:number}){
  return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`;
}


// Implementação da função
let u = {
  nome: 'Ana',
  idade: 25,
  outro: 'abc'
};

console.log(resumo(u));

// Sempre que se cria uma função que recebe um objeto ou mais, que são usadas propriedades distintas dele, é recomendado em Typescript, que seus elementos tenham seus tipos declarados, pelo menos os elementos serão utilizados na função. Caso contrário, o typescript não entenderá esses elementos do objeto como sendo obrigatórios.

// Depois dos elementos do objeto terem sido tipados na função, se tentarmos tirar do objeto 'u' o elemento idade, por exemplo, o typescript acusará erro informando que falta um elemento do objeto.

// Como o elemnto outro do objeto 'u' não está sendo utilizado na função, não é necessário tipalo nos parametros de entrada da função. 