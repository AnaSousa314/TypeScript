/*  O tipo "any" não existe no JavaScript, só no Typescript */

let nomes: any = ['ana','pedro','paulo','joao'];

// any serve para o typescript aceitar qualquer tipagem, ou seja, ignorar/não verificar a tipagem daquela variável. 
//Deve ser usado em último caso.
nomes.push(true)

//o typescript observa o padrão de tipagens dos elementos do array já inicializado e acusa erro quando tentamos colocar um elemento com tipagem diferente das já presentes no array.

// Nesse exemplo, o typescript acusa erro quando tentamos colocar um elemento de tipo boolean no array, pois pelo padrão ele observa que o array foi inicializado com tipos string e number. Ele só para de acusar erro se colocarmos o array como tipo any. Mesmo se não estabelecessemos tipagem nenhuma na inicialização da variável, ele ainda assim acusaria erro, pois ele observa os tipos presentes no array.
let coisas: any =['ana',25,'pera'];
coisas.push(true)