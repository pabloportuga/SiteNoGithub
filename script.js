const pessoas = [];

document.getElementById("formulario").addEventListener("submit", function(event) {
	event.preventDefault(); // Evita o recarregamento da página

	const nome = document.getElementById("nome").value.trim();
	const cpf = document.getElementById("cpf").value.trim();
	const dataDeNascimento = document.getElementById("dataDeNascimento").value.trim();
	const endereço = document.getElementById("endereço").value.trim();

	if (nome === "" || cpf === "" || dataDeNascimento === "" || endereço === "") {
		alert("Por favor, preencha todos os campos!");
		return;
	}
	const cpfExistente = pessoas.some(pessoa => pessoa.cpf === cpf);
	if (cpfExistente) {
		alert("CPF já cadastrado no sistema, insira um novo CPF!");
		return;
	}

	pessoas.push({ nome: nome, cpf: cpf , dataDeNascimento: dataDeNascimento, endereço: endereço});

	document.getElementById("nome").value = "";
	document.getElementById("cpf").value = "";
	document.getElementById("dataDeNascimento").value = "";
	document.getElementById("endereço").value = "";

});
document.getElementById("btnExibir").addEventListener("click", function() {
    atualizarLista(); // Passando pessoas como argumento para a função
});

function atualizarLista() {
	const lista = document.getElementById("listaPessoas");
	lista.innerHTML = "";

	if (pessoas.length === 0) {
		lista.innerHTML = "<li>Nenhum contato cadastrado.</li>";
		return;
	}

	pessoas.forEach((pessoa, index) => {
		const li = document.createElement("li");
		li.textContent = `${index + 1}. Nome: ${pessoa.nome}, CPF: ${pessoa.cpf}, Data de Nascimento: ${pessoa.dataDeNascimento}, Endereço: ${pessoa.endereço}`;
		lista.appendChild(li);
	});
}

document.getElementById("btnBuscar").addEventListener("click", function(){
	const cpfAtual = prompt("Qual CPF você deseja buscar:");

	const pessoaAtual = pessoas.find(pessoa => pessoa.cpf === cpfAtual);

	if(pessoaAtual){
		alert(`Nome: ${pessoaAtual.nome}, Data de Nascimento: ${pessoaAtual.dataDeNascimento}, Endereço: ${pessoaAtual.endereço}`);
	}else{
		alert("Esse CPF não existe!");
	}
});


document.getElementById("btnDeletar").addEventListener("click", function(){
	const cpfAtual = prompt("Qual CPF você deseja deletar:");

	const iPessoa = pessoas.findIndex(pessoa => pessoa.cpf === cpfAtual);

	if(iPessoa!==-1){
		pessoas.splice(iPessoa, 1);

		alert("Contato removido com sucesso!");

	}else{
		alert("CPF não foi encontrado.");
	}
	atualizarLista();
});