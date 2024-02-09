let actionButton = document.getElementById("actionButton");
let count = 0;
//innerText é o conteúdo de um elemento
//innerHTML pega o html do elemento

console.log(actionButton);
function action() {
    actionButton.innerText = "Clicou";
    actionButton.style.backgroundColor = "blue";
    actionButton.style.border = "none"
    count++;
    actionButton.innerText = `Clicou ${count}`
    if (count === 1) {
        actionButton.innerText = `Clicou ${count} vez`
        return;
    }
    actionButton.innerText = `Clicou ${count} vezes`
}


let inputName = document.getElementById("inputName")
function register() {
    console.log(inputName.value)
    if (inputName.value === '') {
        actionButton.style.backgroundColor = 'red'
        return
    }
    actionButton.style.backgroundColor = '#009488'
    console.log('com conteúdo')
}

let message = document.getElementById('message')
function maiorDeIdade() {
    let inputValue = inputName.value
    console.log(inputName.value)
    if (!inputValue) {
        message.innerText = "Por favor, preencha o campo!"
        message.style.color = 'red'
        return
    }
if(inputValue >= 18) {
    message.innerText = "Você é maior de idade"
return
}
    message.innerText = "Você não é maior de idade"}