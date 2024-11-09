let btnMenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay-menu");
const meuBotao = document.getElementById("meuBotao");

meuBotao.addEventListener("click", function (event) {
  // Previne o envio do formulário
  event.preventDefault();

  // Obtém os valores dos campos
  const nomeCompleto = document.getElementById("nomeCompleto").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const mensagem = document.getElementById("MensagemEnviada").value;

  // Verifica se os campos obrigatórios estão preenchidos

  if (nomeCompleto !== "" && email !== "" && mensagem !== "") {
    // Se todos os campos obrigatórios estiverem preenchidos, exibe o alerta
    alert("Sua mensagem foi enviada com sucesso!");
    // Aqui você pode adicionar a lógica para enviar o formulário ou executar outra ação desejada
  } else {
    // Se algum campo obrigatório estiver vazio, exibe uma mensagem pedindo para preencher todos os campos
    alert("Por favor, preencha todos os campos obrigatórios.");
  }
});

meuBotao.addEventListener("click", function (event) {
  event.preventDefault();

  const nomeCompleto = document.getElementById("nomeCompleto");
  const email = document.getElementById("email");
  const telefone = document.getElementById("telefone");
  const mensagem = document.getElementById("MensagemEnviada");

  if (
    nomeCompleto.value !== "" &&
    email.value !== "" &&
    mensagem.value !== ""
  ) {
    // Lógica para enviar o formulário ou realizar outra ação desejada

    // Após o envio do alerta, os campos são limpos
    nomeCompleto.value = "";
    email.value = "";
    telefone.value = "";
    mensagem.value = "";
  } else {
  }
});

btnMenu.addEventListener("click", () => {
  menu.classList.add("abrir-menu");
});

menu.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});

//Fazer o elemento determinado piscar
function ativaLetra(elemento) {
  const arrTexto = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  arrTexto.forEach((Letra, i) => {
    setTimeout(() => {
      elemento.innerHTML += Letra;
    }, 75 * i);
  });
}

const titulo = document.querySelector(".digitando");

ativaLetra(titulo);
