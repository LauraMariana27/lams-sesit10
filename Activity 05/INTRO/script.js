const showPassword = () => {
    var inputSenha = document.querySelector("#senha");
    if(inputSenha.getAttribute("type") === "password"){
        inputSenha.setAttribute("type", "text")
    }else{
        inputSenha.setAttribute("type", "password")
    }
}

function login(){
    var nome = $("#nome").val();
    var senha = $("#senha").val();

    console.log(nome, senha)
    if(nome && senha && nome == "lams@dev.system" && senha == "Lalalams"){
        const user = {
            name: nome,
            dataEntrada: formatarData (new Date()),
            id: Math.floor(Math.random() * 100000)
        }
        localStorage.setItem("usuario", JSON.stringify(user))
        window.location.href = "../LOJA"
    }else{
        document.getElementById('error-modal').style.display = "flex"
    }
}

const fecharModal = () => document.getElementById('error-modal').style.display = "none"

function formatarData(data){
    var options = {
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    }
    return data.toLocaleString("pt-BR", options)
}