let senha = Math.floor(Math.random() * 50) + 1;

let tentativas = 0;
let limite = 7;

const palpite = document.getElementById("palpite");
const tentar = document.getElementById("tentar");
const mensagem = document.getElementById("mensagem");
const contador = document.getElementById("contador");
const cofre = document.getElementById("cofre");
const overview = document.getElementById("overview");
const resultado = document.getElementById("resultado");
const reiniciar = document.getElementById("reiniciar");
const jogar_novamente = document.getElementById("jogar_novamente");

function tentar_abrir() {

    let numero = Number(palpite.value);

    if (palpite.value === "" || numero < 1 || numero > 50) {
        mensagem.innerHTML = "Digite um número entre 1 e 50!";
        return;
    }

    if (tentativas >= limite) {
        return;
    }

    tentativas++;

    let restantes = limite - tentativas;

    contador.innerHTML = restantes;

    mensagem.classList.remove("alerta");

    if (numero === senha) {

        mensagem.innerHTML = "Senha correta!";

        cofre.src = "img/cofre-aberto.png";

        resultado.innerHTML = "Você abriu o cofre em " + tentativas + " tentativa(s)!";

        overview.style.display = "flex";

        tentar.disabled = true;
        palpite.disabled = true;

    } else if (numero < senha) {

        mensagem.innerHTML = "A senha é maior!";

    } else {

        mensagem.innerHTML = "A senha é menor!";

    }

    if (restantes === 2 && numero !== senha) {
        mensagem.innerHTML = "Atenção! Restam apenas 2 tentativas!";
        mensagem.classList.add("alerta");
    }

    if (restantes === 0 && numero !== senha) {
        mensagem.innerHTML = "Você perdeu! A senha era " + senha;
        tentar.disabled = true;
        palpite.disabled = true;
    }

    palpite.value = "";
}

function reiniciar_jogo() {

    senha = Math.floor(Math.random() * 50) + 1;

    tentativas = 0;

    contador.innerHTML = 7;

    mensagem.innerHTML = "";
    mensagem.classList.remove("alerta");

    palpite.value = "";
    palpite.disabled = false;

    tentar.disabled = false;

    cofre.src = "img/cofreaberto.png";

    overview.style.display = "none";
}

tentar.addEventListener("click", tentar_abrir);

reiniciar.addEventListener("click", reiniciar_jogo);

jogar_novamente.addEventListener("click", reiniciar_jogo);