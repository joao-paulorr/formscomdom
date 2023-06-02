function alerta() {
    const user = document.getElementsByTagName("input")[0].value
    const senha = document.getElementsByTagName("input")[1].value


    if (user == "joaopaulorr" && senha == "umdoistres45" || user == "soph" && senha == "123456") {
    } else {
        alert("usuário invalido. vai tomar no seu cu")
    }
}

function login() {
    const user = document.getElementById("user").value;
    const senha = document.getElementById("senha").value;

    switch (user) {
        case "joaopaulorr":
            if (senha === "7654321") {
                alert(`Bem vindo, ${user}!`)
            } else {
                alert("Senha incorreta!");
            }
            break;
        case "eduardo":
            if (senha === "1234567") {
                alert(`Bem vindo, ${user}!`)
            } else {
                alert("Senha incorreta!");
            }
            break;
        default:
            alert("Usuario ou/e senha incorreto!")
    }
}

function idade() {
    const n1 = document.getElementById("n1").value;

    if (n1 >= 5 && n1 <= 10) {
        alert("Seu atleta é da categoria Infantil.")
    } else if (n1 >= 11 && n1 <= 15) {
        alert("Seu atleta é da categoria Juvenil.")
    } else if (n1 >= 16 && n1 <= 20) {
        alert("Seu atleta é da categoria Junior.")
    } else if (n1 >= 21 && n1 <= 25) {
        alert("Seu atleta é da categoria Profissional.")
    } else {
        alert("Você não pode entrar em nenhuma das categorias!")
    }
}

function desconto() {
    
}