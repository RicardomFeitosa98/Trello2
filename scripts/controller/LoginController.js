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
        if(this.inputUsuario.value == "ricardo" && this.inputSenha.value ==("feitosa")){
        alert("Login realizado com sucesso,bem vindo!")
        location.href = "postitboard.html"
        }
        else{
            alert("usuario ou senha inválidos =/")
        }

    }


}