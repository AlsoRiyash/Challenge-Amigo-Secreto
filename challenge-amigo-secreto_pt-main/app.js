//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value.trim();

    if (!nomeAmigo) {
        alert("Por favor, digite o nome do(a) amigo(a)!");
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert("Este nome já está na lista do sorteio!");
        return;
    }

    amigos.push(nomeAmigo);
    atualizarListaAmigos();
    inputAmigo.value = "";
}

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length < 3) {
        alert("Adicione mais amigos para realizar o sorteio!");
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.textContent = `🎉 O(A) amigo(a) sorteado(a) é: ${amigoSorteado}! 🎉`;

    confetti( {
        particleCount: 150,
        spread: 90,
        decay: 0.8,
        gravity: 0.5,
        origin: { y: 0.8 },
        colors: ["#ff0000", "#00ff00", "#0000ff", "#ffcc00", "#ff00ff"]
    });
}

function reiniciarSorteio() {
    amigos = [];
    atualizarListaAmigos();
    document.getElementById("resultado").textContent = "";
    alert("O sorteio foi reiniciado! Adicione novos amigos para começar.");
}
