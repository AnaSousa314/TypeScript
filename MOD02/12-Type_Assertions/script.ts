// Ajudar o typescript a ser mais especifico
// Type Assertions - Assistencia que damos ao TS
// Todo o elemento é um HTMLElement, mas nem todos possuem as mesmas propriedades. Por isso ao tenatarmos pegar o value do elemento o TS acusa erro caso você não especifique que se trata de um HTMLInputElement.

let idadeField = document.getElementById('idade') as HTMLInputElement;

//...


console.log(idadeField.value)//somente o input possui value
console.log(idadeField.classList)//qualquer HTMLElement pode possuir uma classList, logo não precisamos especificar isso para o TS