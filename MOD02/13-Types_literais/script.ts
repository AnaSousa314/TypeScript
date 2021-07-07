// Types literais
// Só posso ter um valor especifico na variavel

let nome: 'Ana' = 'Ana';

nome = 'Ana'

//nome = 'pedro'//não vai ser aceito pois a variavel só pode ter o valor 'Ana'


function mostrarTexto(texto: string, alinhamento: 'left'|'right'|'center'){
  return `<div style="text-align: ${alinhamento}">${texto}</div>`
}

mostrarTexto('Ana','left');
mostrarTexto('Ana','right');
//mostrarTexto('Ana','blabla');//ñ é aceito pq eu só tenho 3 opções especificas de valores para a propriedade alinhamento


// Podemos usar o literal em retorno de funções

type VerdadeiroOuFalso = true | false;

function temNome(name: string): VerdadeiroOuFalso {
  if (name !== '') {
    return true
  }else{
    return false
  }
}



// function configurar(props: {width: number, height: number} | 'auto'){

// }

// Fazendo o mesmo, mas com interface
interface Opcoes{
  width: number,
  height: number
}

function configurar(props: Opcoes | 'auto'){
}


configurar({width: 100, height:200})
configurar('auto')
//configurar('automatico')//ñ vai dar certo





