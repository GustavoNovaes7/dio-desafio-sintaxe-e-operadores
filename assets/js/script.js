var n1 = Number(prompt("Insira o valor do primeiro número"))
var n2 = Number(prompt("Insira o valor do segundo número"))
const soma = n1 + n2
let igualdade = "";
let compDez = "";
let compVinte = "";

function comparacao() {
        if (n1 === n2){
            igualdade = "são";
        } else {
            igualdade = "não são";
        }

        if (n1+n2 > 10) {
            compDez = "maior";
        } else{
            compDez = "menor";
        }

        if (n1+n2 > 20) {
            compVinte = "maior";
        } else{
            compVinte = "menor";
        }
        
        
        alert(`Os números ${n1} e ${n2} ${igualdade} iguais. Sua soma é ${soma}, que é ${compDez} que 10 e ${compVinte} que 20.`)
}
comparacao();
