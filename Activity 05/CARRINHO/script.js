$(document).ready(function() {
    //recuperar o carrinho do localstorage
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    const listaElement = $('#lista');
    const totalElement = $('#total');

    //função que vai exibir o carrinho
    function exibirCarrinho(){
        listaElement.empty();

        let totalPreco = 0;

        $.each(carrinho, function(index, item){
            const listItem = $("<li>").text(
                `${item.descricao} - Preço: R$${item.preco}`
            )
            const removeButton = $('<button>').text("X").css('margin-left', '10px').click(function(){
                removeItemCarrinho(index)
            });
            //adicionar o botão a lista
            listItem.append(removeButton)

            //adicionar o item a lista
            listaElement.append(listItem)

            //adiciona o preço do item total
            totalPreco += item.preco;
        });
        //exibir o total no elemento totalElement
        totalElement.text(`Total: R$${totalPreco.toFixed(2)}`);        
    }
    //função para remover o item do carrinho
    function removeItemCarrinho(index){
        carrinho.splice(index, 1);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        exibirCarrinho();

    }
    exibirCarrinho();
});

function gerarDocumentoWord(){
    const listaElement = document.getElementById("lista")
    const totalElement = document.getElementById("total")
    const listaClone = listaElement.cloneNode(true);

    $(listaClone).find("button").remove();

    const listaHtml = listaClone.innerHTML;
    const totalHtml = totalElement.innerHTML;

    const conteudoHtml = `
    <html>
        <head>
            <meta charset="UTF-8"/>
        </head>
        <body>
            <h1>Pedido Confrimado</h1>
            <h3>Agradecemos sua preferência!</h3>
            <br>
            ${listaHtml}
            <br>
            <br>
            ${totalHtml}
        </body>
    </html>
`;

const blob = new Blob([conteudoHtml], {type: "application/msword"});
const link = document.createElement ("a");
link.href = URL.createObjectURL(blob)
link.download = "carrinho.doc";
link.click();
document.getElementById("pedido").style.display = "block";
}
const successClose = () => document.getElementById("pedido").style.display = "none";