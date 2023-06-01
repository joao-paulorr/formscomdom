function alerta() {
    const user = document.getElementsByTagName("input")[0].value
    const senha = document.getElementsByTagName("input")[1].value


    if (user == "joaopaulorr" && senha == "umdoistres45" || user == "soph" && senha == "123456") {
        alert("te amo")

    } else {
        alert("usuário invalido. vai tomar no seu cu")
    }
}

function login() {
    const user = document.getElementsByTagName("input")[0].value
    const senha = document.getElementsByTagName("input")[1].value

    switch (user && senha) {
        case "1":

        case "2":

        case "3":
            
        default:
            window.alert("Usuario e/ou senha incorretos!");
    }

    var reais = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(res);
    window.document.write("O valor do combustível é: " + reais);
}