let produtos

window.onload = function () {
    var storedUser = localStorage.getItem("usuario")
    var user = JSON.parse(storedUser)

    document.getElementById("user").textContent = user.name;
    document.getElementById("perfil").textContent = user.name + " - Registro de Login: " + user.dataEntrada;
    document.getElementById("idPerfil").textContent = user.id;
}

document.addEventListener("DOMContentLoaded", function () {
    fetch("../LOJA/loja.json").then((response) => response.json()).then((data) => {
        produtos = data;
        const produtosContainer = document.getElementById("produtos-container");

        produtos.forEach((produto, index) => {
            const card = document.createElement("div")
            card.className = "card mb-3"
            card.style.maxWidth = "540px"

            const row = document.createElement("div")
            row.className = "row g-0"

            const col4 = document.createElement("div")
            col4.className = "col-md-4"

            const imagem = document.createElement("img")
            imagem.src = produto.imagem
            imagem.className = "img-fluid rounded-start"

            const col8 = document.createElement("div")
            col8.className = "col-md-8"

            const cardBody = document.createElement("div")
            cardBody.className = "card-body"

            const cardTitle = document.createElement("h5")
            cardTitle.className = "card-title"
            cardTitle.textContent = produto.descricao

            const cardText = document.createElement("p")
            cardText.className = "card-text"
            cardText.textContent = "R$ " + produto.preco.toFixed(2)

            const btnCarrinho = document.createElement("a")
            btnCarrinho.href = "#"
            btnCarrinho.className = "btn btn-primary btn-carrinho"
            btnCarrinho.textContent = "Adicionar ao carrinho"
            btnCarrinho.setAttribute("data-indice", index)

            card.appendChild(row)
            card.appendChild(col4)
            card.appendChild(imagem)
            card.appendChild(col8)
            card.appendChild(cardBody)

            row.appendChild(col4)

            col4.appendChild(imagem)

            col8.appendChild(cardBody)

            cardBody.appendChild(cardTitle)
            cardBody.appendChild(cardText)
            cardBody.appendChild(btnCarrinho)

            produtosContainer.appendChild(card)


        });
    }).catch((error) => console.error("Erro ao carregar o arquivo JSON", error))

    $('#produtos-container').on('click', ".btn-adicionar-ao-carrinho", function () {
        const indexDoProduto = $(this).data("indice");
        const produtoSelecionado = produtos[indexDoProduto];

        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
        carrinho.push(produtoSelecionado);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        alert("PRODUTO ADICIONADO AO CARRINHO")
    })
})