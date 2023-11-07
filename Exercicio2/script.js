function verificaAprovacao(numMaterias) {
    
    let nome = String(prompt("Digite o seu nome"));

    if (nome.length < 5) {
        alert("Nome inválido. É necessário pelo menos 5 caracteres para o nome. Digite novamente");
        let nome = String(prompt("Digite o seu nome"));
    }

    let presenca = Number(prompt("Digite sua presença"));

    if (presenca < 0 || presenca > 10) {
        alert("Valor para a presença inválido. Digite um número entre 0 à 10");
        let presenca = Number(prompt("Digite sua presença"));
    }

    let somaNota = 0;

    for (let i = 0; i < numMaterias; i++) {
        let materia = String(prompt("Digite o nome da matéria"));
        let nota = Number(prompt("Digite a sua nota"));

        if (nota < 0 || nota > 10) {
            alert("Valor para a nota inválido. Digite um número entre 0 à 10");
            let nota = Number(prompt("Digite a sua nota"));

            return somaNota += nota;
        }

        return somaNota += nota;
    }

    mediaNota = somaNota / 10;

    if (mediaNota >= 8 && presenca >= 6) {
        alert(`A nota do aluno ${nome} é ${mediaNota} e sua presença é ${presenca}: Aluno aprovado!`);
    } else {
        alert(`A nota do aluno ${nome} é ${mediaNota} e sua presença é ${presenca}: Aluno reprovado!`);
    }

}


console.log(verificaAprovacao(10));