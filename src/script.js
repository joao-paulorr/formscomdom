function alerta() {
    const user = document.getElementsByTagName("input")[0].value
    const senha = document.getElementsByTagName("input")[1].value


    if (user == "joaopaulorr" && senha == "umdoistres45") {
        alert("Bem vindo, João!")

    } else {
        alert("usuário invalido. vai tomar no seu cu")
    }
}

var luz = 2
var cm = 180

switch (luz) {
    case 1:
        res = cm * 2.50
        break
    case 2:
        res1 = cm * 1.35
        break
    case 3:
        res2 = cm * 0.88
        break
    default:
        window.document.write("Valor Inválido")
}