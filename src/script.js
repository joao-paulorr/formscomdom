function alerta() {
    const user = document.getElementsByTagName("input")[0].value
    const senha = document.getElementsByTagName("input")[1].value


    if (user == "joaopaulorr" && senha == "umdoistres45" || user == "soph" && senha == "123456") {
    } else {
        alert("usuário invalido. vai tomar no seu cu")
    }
}

// function login() {
//     const user = document.getElementById("user").value;
//     const senha = document.getElementById("senha").value;

//     switch (user) {
//         case "joaopaulorr":
//             if (senha === "7654321") {
//                 alert(`Bem vindo, ${user}!`)
//             } else {
//                 alert("Senha incorreta!");
//             }
//             break;
//         case "eduardo":
//             if (senha === "1234567") {
//                 alert(`Bem vindo, ${user}!`)
//             } else {
//                 alert("Senha incorreta!");
//             }
//             break;
//         default:
//             alert("Usuario ou/e senha incorreto!")
//     }
// }

function cubo() {
    var n1 = document.getElementById("n1").value;
    var resultado = n1 * n1 * n1;
    document.write(resultado);
}