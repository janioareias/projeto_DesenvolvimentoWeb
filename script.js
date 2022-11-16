var i = 0;
var texto = 'fr!day';
var speed = 550;

function typeWriter() {
  if (i < texto.length) {
    document.getElementById("logo").innerHTML += texto.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    document.body.style.opacity='1';
  }
}

const confirmarSaida = () => {
  const resposta = confirm("O link irá redirecionar para meu LinkedIn, uma página externa. Deseja sair do site?");

  if (resposta) {
    window.location.replace("https://github.com/janioareias");
  }
}

const confirmarSaidaLast = () => {
  const resposta = confirm("O link irá redirecionar para minha página do Last.fm, uma página externa. Deseja sair do site?");

  if (resposta) {
    window.location.replace("https://www.last.fm/pt/user/janio_/library/artists");
  }
}

const redirecionarLogin = () => {
  window.location.replace("home.html");
}