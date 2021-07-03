let num1 = document.getElementById("numero1")
let num2 = document.getElementById("numero2")
let btn = document.getElementById("calcular")
let res = document.getElementById("resultado")


function calcular(n1,n2){
  if (typeof n1=="number" && n2=="number") {
    return n1+n2;
  }else{
    // n1 = parseInt(n1);
    // n2 = parseInt(n2);

    //se colocarmos um + antes da variável, ela se tornara um numero
    return +n1 + +n2;
  }
}

btn.addEventListener("click",function(){
  res.innerHTML= calcular(num1.value, num2.value);
});

