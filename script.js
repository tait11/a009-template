const nome = prompt("Qual é o seu nome?");
const cor = prompt("Qual a sua cor preferida?");

//concatenação
let mensagem1 = "A cor favorita de " +  nome  + " é " + cor;
console.log(mensagem1);

//template string

let mensagem2 = `A cor favorita de ${nome} é ${cor}`;
console.log(mensagem2);

mensagem2 = `Nome: ${nome}
Cor favorita: ${cor}`;
console.log(mensagem2);

//nome da pessoa em letra maiúscula
//quantos caracteres tem o nome
//ver se no nome tem a letra A

console.log(`O nome ${nome.toUpperCase()} possui ${nome.length} caracteres`)

console.log(`O nome possui a letra A: ${nome.includes("a")}`);

//const nome = prompt("Qual é o seu nome?");
//const email = prompt("Qual é o seu e-mail?");

//const novoNome = nome.replaceAll ("r", "l");
//console.log(novoNome);

//console.log(email.includes("@"));

//console.log(`O e-mail ${email} foi cadastrado com sucesso. Boas vindas, ${nome}! \nO nome ${nome} tem ${nome.length} caracteres`);