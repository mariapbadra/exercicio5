
function chama() {
    //document.body.style.backgroundColor = "red";
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let batata = a + b;
    //alert("SOMA IGUAL A " + soma);
    console.log("SOMA IGUAL A " + batata)
    //devolver o resultado para a tela
    document.getElementById("resultado").innerHTML = "SOMA IGUAL A " + soma
}
//ponto de mínimo / máximoSS
function exercicio1() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);

    let xv = -b/(2*a);
    let delta = b*b - 4*a*c;
    let yv = -delta/(4*a);
    //devolver o resultado para a tela
    document.getElementById("resultado").innerHTML = "O PONTO É (" + xv.toFixed(2) + "," + yv.toFixed(2) + ")";

}

//corversao de temperatura
function exercicio2() {
    let resultado;
   // alert ("teste");
    let t = document.getElementById("temp").value;
    console.log("TEMP=" + t);
    let escala = document.getElementById("converter").value;
    console.log ("PARA=" + escala);
    if(escala == "c") {
        //C = (F-32) *5/9
        resultado = (t-32)*5/9
        document.getElementById("saida").innerHTML = t +"<sup>o</sup> F vale" + resultado +"<sup>o</sup> C"
    }
    else {
        //F = 9*C/5 + 32
        resultado = 9*t/5 + 32
        document.getElementById("saida").innerHTML = t + "<sup>o</sup> C vale" + resultado +"<sup>o</sup> F"
    }
}


function exercicio3() {
    let resultado;
   // alert ("teste");
    let valor = parseFloat (document.getElementById("valor").value)
    console.log("VALOR=" + valor);
    let escala = document.getElementById("opcao").value;
    console.log ("OPÇÃO=" + escala);
    if(opcao ==1){
        //30% DO VALOR 
        resultado = 0.3* valor; //valor+ 30% do valor
        document.getElementById("saida").innerHTML = t +"<sup>o</sup> C vale" + resultado +" é 30% de" + valor;
    }
    else if (opcao == 2) {
        //ACRESCIMO DE 30%
        resultado = 1.3*valor; // valor+ 0.3*valor
        document.getElementById("saida").innerHTML = resultado + "acrescimo em" + valor;
    }
    else {
        //DESCONTO DE 30%
        resultado = 0.7*valor; // valor- 0.3*valor
        document.getElementById("saida").innerHTML = resultado + "descontando 30% de" + valor;
    }

}

