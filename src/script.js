function alerta() {
    const user = document.getElementsByTagName("input")[0].value
    const senha = document.getElementsByTagName("input")[1].value


    if (user == "joaopaulorr" && senha == "umdoistres45") {
        alert("Bem vindo, João!")

    } else {
        alert("usuário invalido. vai tomar no seu cu")
    }
}

var luz = prompt("caso 1, 2 ou 3?")
var cm = 750

switch (luz) {
    case "1":
        res = cm * 2.50
        window.document.write(res)
        break
    case "2":
        res = cm * 1.35
        window.document.write(res)
        break
    case "3":
        res = cm * 0.88
        window.document.write(res)
        break
    default:
        window.document.write("Valor Inválido")
}