/* Se deixarmos a pagina script.js também aberta no editor, aparecerá vários erros no arquivo .ts */
var num1 = document.getElementById("numero1");
var num2 = document.getElementById("numero2");
var btn = document.getElementById("calcular");
var res = document.getElementById("resultado");
function calcular(n1, n2) {
    return n1 + n2;
}
btn.addEventListener("click", function () {
    res.innerHTML = calcular(+num1.value, +num2.value).toString();
});
