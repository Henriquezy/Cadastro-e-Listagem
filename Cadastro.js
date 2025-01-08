// redirecionar usuario
function redirectionListagem() {
  armazenarDados();
  window.location.href = "index1.html"
}

// armazenar os dados
function armazenarDados() {
  // variaveis
  const nome = document.getElementById("nomeProduto").value
  const descricao = document.getElementById("descricaoProduto").value
  const valor = document.getElementById("valorProduto").value
  const radio = document.querySelector('input[name="option"]:checked').value

  // Array com os produtos
  const vetproduto = {
    nome,
    descricao,
    valor,
    option: radio,
  }

  // retorno dos dados do local.storage
  let produtos = JSON.parse(localStorage.getItem("produtos")) || []
  // adiciona um novo produto ao array
  produtos.push(vetproduto);
  localStorage.setItem("produtos", JSON.stringify(produtos))

  window.alert('Produto cadastrado com sucesso!')
}

// mascara para valor do produto
function aplicarMascaraReal(valor) {
  valor = valor.replace(/\D/g, "")
  valor = (valor / 100).toFixed(2).replace(".", ",")
  return "R$ " + valor.replace(/(\d)(?=(\d{3})+(\,|$))/g, "$1.")
}
const inputValor = document.getElementById("valorProduto")
inputValor.addEventListener("input", function () {
  let valor = inputValor.value;
  inputValor.value = aplicarMascaraReal(valor)
});
