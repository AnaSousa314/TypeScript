// Ao colocar a ? depois do nome do elemento do objeto, ele se torna opcional na função. Ou seja, se o usuário não colocar a sua idade o typescript não acusará erro, pois ele entende que esse elemento não é obrigatório. 

// Mas note que o elemento não é obrigatório, mas seu tipo é. O elemento idade continua sendo do tipo number 

function resumo(usuario:{nome:string,idade?:number}){
  if(usuario.idade !== undefined){
    return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`;
  }else{
    return `Olá ${usuario.nome}, tudo bem?`;
  }
}


// Implementação da função
let u = {
  nome: 'Ana',
  // idade: 25,
  outro: 'abc'
};

console.log(resumo(u));