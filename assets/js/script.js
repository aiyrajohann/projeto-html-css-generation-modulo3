let nome = window.document.getElementById("nome") 
let email = document.querySelector("#email")
let assunto = document.querySelector("#subject") 
let mensagem = document.querySelector("#mensagem")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mensagemOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"

function validarNome(){
    let txt = document.querySelector("#txtNome")
    if (nome.value.length < 3){
        txt.innerHTML = "Nome inválido"
        txt.style.color = "red"
    } else {
        txt.innerHTML = "Nome válido"
        txt.style.color = "green"
        nomeOk = true
    }
}

function validarEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}       

function validarSubject(){
    let txtSubject = document.querySelector("#txtSubject")
    if(assunto.value.length >= 100){
        txtSubject.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres"
        txtSubject.style.color = "red"
        txtSubject.style.display = "block"
    } else {
        txtSubject.style.display = "none"
        assuntoOk = true
    }   
    }

function validarMensagem(){
    let txtMensagem = document.querySelector("#txtMensagem")    
    if(mensagem.value.length >= 500){
        txtMensagem.innerHTML = "Texto é muito grande, digite no máximo 500 caracteres"
        txtMensagem.style.color = "red"
        txtMensagem.style.display = "block"
    } else {
        txtMensagem.style.display = "none"
        mensagemOk = true
    }
    }

    function enviar(){
        if (nomeOk == true && emailOk == true && assuntoOk == true && mensagemOk == true){
            alert("Formulário enviado com sucesso!")
        } else {
            alert("Preencha o formulário corretamente antes de enviar...")
        }
    }

function mapaZoom(){
    mapa.style.width = "900px"
    mapa.style.height = "650px"
}
function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}   