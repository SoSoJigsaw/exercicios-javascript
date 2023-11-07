function portaria() {

    let nome = String(prompt("Digite o seu nome"));
    let idade = Number(prompt("Digite sua idade"));
    let estaAcompanhado = String(prompt('Você está acompanhado? Digite "s" para sim e "n" para não'));

    if (estaAcompanhado.toLowerCase() == "s") {
        estaAcompanhado = true;
    } else if (estaAcompanhado.toLowerCase() == "n") {
        estaAcompanhado = false;
    }

    if (idade < 18) {
        alert(`Entrada não permitida para ${nome}: Menor de idade.`)
    } else {
        if (estaAcompanhado == true) {
            alert(`Entrada permitida para ${nome}: Conceder desconto.`)
        } else {
            alert(`Entrada permitida para ${nome}: Valor integral.`)
        }
    }

}

