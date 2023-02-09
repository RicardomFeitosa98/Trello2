class LoginController{
    constructor(){
        let $ = document.querySelector.bind(document)
        this.inputUsuario = $("#user")
        this.inputSenha = $("#pword")
        
    }
    submit(event){
        event.preventDefault()
        console.log(this.inputUsuario.value)
        console.log(this.inputSenha.value)
        alert("Login realizado com sucesso,bem vindo!")

    }


}