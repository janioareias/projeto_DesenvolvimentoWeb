var i = 0;
var texto = 'artistas certificados';
var speed = 150;

function typeWriter() {
  if (i < texto.length) {
    document.getElementById("logo").innerHTML += texto.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    document.body.style.opacity='1';
  }
}

const confirmarSaida = () => {
  const resposta = confirm("O link irá redirecionar para meu GitHub, uma página externa. Deseja sair do site?");

  if (resposta) {
    window.location.replace("https://github.com/janioareias");
  }
}

