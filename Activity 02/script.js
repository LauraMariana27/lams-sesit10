var nomeL;
var mensagemL;

function conferirMensagemL(){
    var nameL = document.getElementById("nmL").value;
    var messageL = document.getElementById("msgL").value;

    nomeL = nameL;
    mensagemL = messageL;

    document.getElementById("confNmL").textContent = nameL;
    document.getElementById("confMsgL").textContent = messageL;
}

var nomeR;
var mensagemR;

function conferirMensagemR(){
    var nameR = document.getElementById("nmR").value;
    var messageR = document.getElementById("msgR").value;

    nomeR = nameR;
    mensagemR = messageR;
    
    document.getElementById("confNmR").textContent = nameR;
    document.getElementById("confMsgR").textContent = messageR;
}

function enviarL(){
    var numFoneL = "5541999999998"
    var linkWhatsappL = "https://wa.me/" + 
    numFoneL + "?text=Nome: " + 
    nomeL + " - " + 
    mensagemL;
    window.open(linkWhatsappL, "_blank")
}

function enviarR(){
    var numFoneR = "5541999999989"
    var linkWhatsappR = "https://wa.me/" + 
    numFoneR + "?text=Nome: " + 
    nomeR + " - " + 
    mensagemR;
    window.open(linkWhatsappR, "_blank")
}