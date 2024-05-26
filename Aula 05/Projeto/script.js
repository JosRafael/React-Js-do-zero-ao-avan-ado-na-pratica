//Este é meu nome
//var nome = "Rafael";

//função entrar
function entrar() {
  var area = document.getElementById("area");
  var texto = prompt("Qual o seu nome?");

  if (texto === "" || texto === null) {
    alert("Digite seu nome novamente!");
    area.innerHTML = "Bem vindo ... ";
  } else {
    area.innerHTML = "Bem vindo " + texto;
  }
}
//função entrar 2
function entrar2(nome) {
  var area = document.getElementById("area2");
  var texto = prompt("Qual o seu sobrenome?");

  if (texto === "" || texto === null) {
    alert("Digite seu sobrenome");
    area.innerHTML = "Bem vindo...";
  } else {
    area.innerHTML = "Bem vindo..." + nome + " " + texto;
  }
}
//função entrar 3
function entrar3(nome) {
  var area = document.getElementById("area3");
  var texto = prompt("Qual a sua idade?");

  if (texto === "" || texto === null) {
    alert("Digite sua idade");
    area.innerHTML = "Bem vindo...";
  } else {
    area.innerHTML = "Me chamo " + nome + " " + "e tenho" + texto + " anos...";
  }
}
