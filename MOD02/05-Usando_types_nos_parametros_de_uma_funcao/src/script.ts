
// Podemos colocar tipagem nos parâmetros assim como colocamos nas variaveis.
function firstLetterUpperCase(name: string, age: number){
    let firstLetter = name.charAt(0).toUpperCase();

    return `${firstLetter}${name.substring(1)} tem ${age}`;
}

firstLetterUpperCase('ana',25);