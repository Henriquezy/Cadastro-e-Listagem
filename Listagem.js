function carregarPagina() {
  // retorna os produtos no local.storage 
  const produtos = JSON.parse(localStorage.getItem("produtos")) || []
  
  // verifica se há elementos no array 
  if (produtos.length > 0) {
    // percorre o array e atualiza os dados 
    produtos.forEach(produto => {
      updatetable(produto.nome, produto.descricao, produto.valor, produto.option)
    });
  } else {
    console.warn("Nenhum dado encontrado no localStorage.")
  }
}

function updatetable(nome, descricao, valor, radio) {
    // Obtém o tbody da tabela 
    const productList = document.getElementById("product-list")
  
    // Cria uma nova linha para exibir os novos produtos 
    const row = document.createElement("tr")
    row.innerHTML = `
      <td>${nome}</td>
      <td>${descricao}</td>
      <td>${valor}</td>
      <td>${radio}</td>
    `
  
    // Adiciona a nova linha ao tbody
    productList.appendChild(row)
  }

function redirectionCadastro() {
  window.location.href = "index.html"
}
