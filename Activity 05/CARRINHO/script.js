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
                `${item.descricao} - Preço: R$${item.preço}`
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