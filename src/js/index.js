const cartoes = document.querySelectorAll(".cartao");
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao) {
  cartoes[indiceCartao].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;

  esconderCartaoSelecionado();

  cartaoAtual++;
  mostrarCartao(cartaoAtual);
  mostrarOuEsconderSetas()
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;

  esconderCartaoSelecionado();

  cartaoAtual--;
  mostrarCartao(cartaoAtual);
  mostrarOuEsconderSetas()
});

function mostrarOuEsconderSetas(){
  if(cartaoAtual === cartoes.length - 1){
    btnAvancar.classList.add('seta-esconder')
  } else {
    btnAvancar.classList.remove('seta-esconder')
  }

  if(cartaoAtual === 0){
    btnVoltar.classList.add('seta-esconder')
  } else {
    btnVoltar.classList.remove('seta-esconder')
  }
}