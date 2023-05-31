function alerta() {
    const user = document.getElementsByTagName("input")[0].value
    const senha = document.getElementsByTagName("input")[1].value


    if (user == "joaopaulorr" && senha == "umdoistres45") {
        alert("Bem vindo, João!")

    } else {
        alert("usuário invalido. vai tomar no seu cu")
    }
}

var gas = prompt("Quanto vai comprar de combustivel?")
var tipo = prompt("Qual o tipo? Alcool (1), Gasolina (2), Diesel (3)")
switch (tipo) {
    case "1":
        res = gas * 3.49
        window.document.write(res)
        break
    case "2":
        res = gas * 5.03
        window.document.write(res)
        break
    case "3":
        res = gas * 5.29
        window.document.write(res)
        break
    default:
        window.document.write("Valor Inválido")
}