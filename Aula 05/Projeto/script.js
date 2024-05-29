//SOME EVERY

let nomes = [
  {nome: 'Matheus', idade: 18},
  {nome: 'Marias', idade: 25},
  {nome: 'Henrique', idade: 20},
]

//console.log(nomes.some(nome => nome === 'Henrique'));

//console.log(nomes.every(nome => nome.idade >= 18));

if(nomes.every(nome => nome.idade>=28)){
  console.log("TODOS SÃO MAIORES QUE 18");
}else{
  console.log("NEM TODOS SÃO MAIORES QUE 18");
}
