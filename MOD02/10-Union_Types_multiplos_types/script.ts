// Variavel/Parametros com multiplos tipos. Para isso basta colocar uma barra e os tipos

// let idade: string | number = 90;

// idade = document.getElementById('idade').innerHTML;

//  Quando tenho um parametro que possui mais de um tipo diferente, e estou usando uma propriedade que é exclusiva de um tipo é preciso fazer o tratamento desse tipo.
function mostrarIdade(idade: string | number){
  //console.log(`Minha idade é: ${idade}`);
  //console.log(idade.toUpperCase());

  // Tratamento do tipo
  if (typeof idade === "string" ) {
    console.log(idade.toUpperCase());
  }else{
    console.log(`Minha idade é: ${idade}`);
  }
}

mostrarIdade(90);
mostrarIdade("25");