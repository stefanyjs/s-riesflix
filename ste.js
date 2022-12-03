function enviar(){
    var nome = document.getElementById("caixa1").value;
    var nome2 = document.getElementById("caixa2").value;
    alert("seja bem vindo " + nome + "  " + nome2);
    var nome3 = document.getElementById("nome").value;
    document.getElementById("saudacao").innerHTML = ("Seja bem vindo, " + nome2);
}