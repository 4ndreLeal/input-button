var respostaCerta = "helloWorld";

var respostaUsuario = document.querySelector("input"); // pegar value do input do html

function testarResposta(){
	if(respostaUsuario.value == respostaCerta){
		alert("Resposta certa!");
	} else{
		alert("Resposta errada!");
	}
}

var botao = document.querySelector("button"); 

botao.onclick = testarResposta; // ao clicar, pegar conteudo da funcao testarResposta() e executá-lo