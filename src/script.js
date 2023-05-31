function alerta() {
    const user = document.getElementsByTagName("input")[0].value
    const senha = document.getElementsByTagName("input")[1].value


    if (user == "joaopaulorr" && senha == "umdoistres45") {
        alert("Bem vindo, João!")

    } else {
        alert("usuário invalido. vai tomar no seu cu")
    }
}

function combustivel() {
    var tipo = form.document.getElementById('tipo').value;
    var gas = form.document.getElementById('gas').value;

    switch (tipo) {
        case "1":
            res = gas * 3.49;
            break;
        case "2":
            res = gas * 5.03;
            break;
        case "3":
            res = gas * 5.29;
            break;
        default:
            window.alert("Valor Inválido");
            return;
    }

    var reais = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(res);
    window.document.write("O valor do combustível é: " + reais);
}