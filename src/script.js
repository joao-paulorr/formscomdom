function alerta() {
    const user = document.getElementsByTagName("input")[0].value
    const senha = document.getElementsByTagName("input")[1].value


    if (user == "joaopaulorr" && senha == "umdoistres45") {
        alert("Bem vindo, João!")

    } else {
        alert("usuário invalido. vai tomar no seu cu")
    }
}

function quadrado() {
    let quadrado = document.getElementById("quadrado")
    quadrado.style.backgroundColor = prompt("Qual é a cor? digite em inglês")
    quadrado.style.width = prompt("Qual a largura? acima de 100")+"px"
    quadrado.style.height = prompt("Qual o tamanho? acima de 100")+"px"
}
