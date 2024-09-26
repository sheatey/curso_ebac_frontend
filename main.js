const numberA = document.getElementById("numero-a")
const numberB = document.getElementById("numero-b")
const btnEnviar = document.querySelector('#btn-submit')
const messageSucess = document.querySelector('#message-sucess')

function validaMaior (a, b) {
    return b > a
}

messageSucess.style.display = "none"

btnEnviar.addEventListener('click', function(e) {
    e.preventDefault()

    let a = parseFloat(numberA.value)
    let b = parseFloat(numberB.value)

    let formValido = validaMaior(a, b)

    if (formValido) {
        numberB.classList.remove('error')
        messageSucess.innerHTML = `O número B é <b>maior</b> que o número A. Formulário enviado com sucesso!`
        messageSucess.style.backgroundColor = "green"

        messageSucess.style.display = "block"
        numberA.value = ''
        numberB.value = ''
    } else {
        messageSucess.innerHTML = `O número B <strong>NÃO</strong> é <b>maior</b> que o número A. Formulário não enviado!`
        messageSucess.style.display = "block"
        messageSucess.style.backgroundColor = "red"

        numberB.classList.add('error')
    }
})