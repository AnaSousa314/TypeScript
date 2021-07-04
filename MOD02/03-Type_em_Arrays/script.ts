
// Forma correta e mais comum de se tipar um array. Dessa forma "let nomes: string=['ana','pedro']" estaria errada a tipagem, pois o Typescript não entenderia como um array de strings.
let nomes: string[] = ['ana','pedro','luiz','joao'];
let idades: number[] = [25,30,45,90,15,30];

//Forma também correta, mas menos comum de se tipar um array
let numeros: Array<number> = [15,23,59];
let frutas: Array<string> = ['pera','manga','uva'];


//Se você tentar colocar algum elemeto no array com tipo diferente do já estabelecido em sua inicialização, o typescript acusará um erro.Ex:
//numeros.push('ana')