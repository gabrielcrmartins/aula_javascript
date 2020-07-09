function clicou(){
    document.getElementById("agradecimento").innerHTML = "<u>Obrigado por clicar</u>";
    console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    //window.open("http://www.google.com.br");
    window.location.href = "http://www.google.com.br";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2){
    return n1 + n2;
}

var validar = 0;
function validaIdade(idade){
    if (idade >= 18){
        validar = true;
    } else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Informe sua idade");
validaIdade(idade)
console.log(validar);
*/

/*
var d = new Date();
alert(d.getHours() + ":" + d.getMinutes());
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
};
*/

/*
var count = 0
while(count <= 5){
    console.log(count);
    alert(count);
    count ++;
}
*/

//var idade = prompt("Informe sua idade");
//if(idade >= 18){
//    alert("Você é maior de idade.");
//}else{
//    alert("Você é menor de idade");
//}

//var nome = "Gabriel Martins";
//var idade = "23 anos";
//alert("Bem vindo " + nome.replace("Gabriel", "Raphael") + ". Você tem " + idade);
//console.log(nome + "\n" + idade);

//var frutas = [{nome:"maça", cor:"vermelha"},
//{nome:"uva", cor:"roxa"}];
//alert(frutas[1].nome);
//console.log(frutas);

//var lista = ["maça", "pêra", "laranja"];
//console.log(lista.toString());
//console.log(lista.join(" - "));