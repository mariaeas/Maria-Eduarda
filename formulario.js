let inputName = document.getElementById("inputName");
let inputEmail = document.getElementById("inputEmail");
let inputTelefone = document.getElementById("inputTelefone")
let mensagem = document.getElementById("mensagem")
let actionButton = document.getElementById("actionButton")


function validarForm() {
    if (!inputName.value) {
        mensagem.innerText = "Por favor, preencha o campo indicado"
        inputName.style.backgroundColor = "red"
        return
    }
    else if (!inputEmail.value) {
        mensagem.innerText = "Por favor, preencha o campo indicado corretamente"
        inputEmail.style.backgroundColor = "red"
        return
    }

    else if(!inputTelefone.value) {
        mensagem.innerText = "Por favor, preencha o campo indicado"
        inputTelefone.style.backgroundColor = "red"
    return
    }
    
    mensagem.innerText = "Dados recebidos, todos os campos foram preenchidos corretamente"

    mensagem.style.backgroundColor = '#009488'
}
