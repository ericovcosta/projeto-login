
// setInterval(function(){
// 	const hoje = new Date()
// 	const dia = hoje.getDate().toString().padStart(2,'0')
// 	const mes = String(hoje.getMonth() + 1).padStart(2,'0')
// 	const ano = hoje.getFullYear()
// 	const dataAtual = `${dia} / ${mes} / ${ano}`

// 	const hora = hoje.getHours().toString().padStart(2,'0');
// 	const minuto = hoje.getMinutes().toString().padStart(2,'0');
// 	const segundos = hoje.getSeconds().toString().padStart(2,'0');
// 	const horaAtual = `${hora}:${minuto}:${segundos}`

// 	const data_Atual = document.querySelector("#data");
// 	const hora_Atual = document.querySelector("#hora");

// 	data_Atual.textContent = dataAtual;
// 	hora_Atual.textContent = horaAtual;
// },1000)
//Bom dia =  se hora < 12 e hora > 6
//Boa tarde = hora < 18 e hora > 12
//Boa Noite = hora > 18 e hora < 6

setInterval(function data(){
	const local_hora = document.querySelector('#hora')
	const hoje = new Date();
	const hora = hoje.getHours().toString().padStart(2,'0');
	const minuto = hoje.getMinutes().toString().padStart(2,'0');
	const segundos = hoje.getSeconds().toString().padStart(2,'0');
	const horaAtual = `${hora}:${minuto}:${segundos}`
	var saldacao = "";
	hora_int = parseInt(hora);
	if(hora_int > 6 ){
		saldacao = "Bom dia!";
	}
	if(hora_int > 12) {
		saldacao = "Boa tarde!";
	}
	if(hora_int > 18){
		saldacao = "Boa noite!";
	}
	local_hora.textContent = horaAtual+" - "+saldacao;
},1000)

const resultado = document.getElementById("resultado");
function nome_usuario(){
	var nome = document.getElementById("nome").value;

	resultado.textContent = "Seja Bem Vindo "+nome;
}

var img = document.querySelector('[alt=""]');
console.log(img);

function diminuir(){
	img.setAttribute("width",'20%');
}