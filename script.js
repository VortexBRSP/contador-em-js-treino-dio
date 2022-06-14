var currentValue = 0;
var currentValueWrapper = document.getElementById("currentValue");
var btnAdicionar = document.getElementById("btnAdicionar");
var btnRemover = document.getElementById("btnRemover");

function verificarValor() {
  if (currentValue >= 100) {
    currentValueWrapper.style.color = "green";
  } else if (currentValue >= 50) {
    currentValueWrapper.style.color = "orange";
  } else {
    currentValueWrapper.style.color = "red";
  }
}
verificarValor();
function adicionarValor() {
  currentValue += 1;
  currentValueWrapper.innerHTML = currentValue;
  verificarValor();
}
function removerValor() {
  if (currentValue == 0) {
    return;
  } else {
    currentValue -= 1;
    currentValueWrapper.innerHTML = currentValue;
    verificarValor();
  }
}

btnAdicionar.addEventListener("click", adicionarValor);
btnRemover.addEventListener("click", removerValor);
