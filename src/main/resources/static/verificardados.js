document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#formUser")
    const name = document.querySelector("#nomeUser")
    const email = document.querySelector("#emailUser")
    const senha = document.querySelector("#senhaUser")
    const confirmarSenha = document.querySelector("#senhaconfirmUser")
    const btnconfirm = document.getElementById("btnsub")

    // ao clicar no botão, verifica dados
    btnconfirm.addEventListener("click", function (e) {
        e.preventDefault()
        if (name.value === "" || email.value === "" || senha.value === "" || confirmarSenha === "") {
            alert("Preencha todos os campos")
        } else if (senha.value !== confirmarSenha.value) {
            alert("As senhas não conferem")
        } else if (senha.value.length < 6) {
            alert("A senha deve conter no mínimo 6 caracteres")
        } else {
            alert("Cadastro realizado com sucesso")
        }

        // limpa os campos
        name.value = ""
        email.value = ""
        senha.value = ""
        confirmarSenha.value = ""
    })
})

