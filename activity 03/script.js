function adicionarItem(){
    var nome = document.getElementById("nome").value;
    var valor = document.getElementById("valor").value;
    var qntd = document.getElementById("qntd").value;

    if(!nome || !valor || !qntd){
        alert("Preencha todos os campos!")
        return;
    }
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
}