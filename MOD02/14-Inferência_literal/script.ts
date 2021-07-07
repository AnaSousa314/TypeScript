function fazerRequisicao(url:string, method: 'GET'|'POST'){
  //...
}

// type Methods = 'GET'|'POST';

// let url= "https://google.com.br";
// let method: Methods = 'GET';

// let req = {
//   url= "https://google.com.br"
//   method: Methods = 'GET'
// }


// Outra forma de se fazer o mesmo

type RequestDetails = {
  url: string,
  method: 'GET' | 'POST'
}

let req: RequestDetails = {
  url: "https://google.com.br",
  method: 'GET'
}

fazerRequisicao(req.url,req.method);

/* 
  Inferência Literal

  Se feito da forma abaixo, o TS acusará erro, pois a função especifíca o paramêtro method só pode ter dois valores específicos, no entanto, como não é colocada nehuma "proteção" o atributo method do objeto req pode receber qualquer valor. Por existir essa possibilidade o TS acusa logo como erro para que seja especificado o tipo do atributo ou variável. Para isso usamos o "type", que depois de declarado não pode ter seus valores alterados.
  Isso é inferência de Literal
  function fazerRequisicao(url:string, method: 'GET'|'POST'){
    ...
  }

  let req = {
    url: "https://google.com.br",
    method: 'GET'
  }

  fazerRequisicao(req.url,req.method);
*/