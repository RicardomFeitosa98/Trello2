class LoginController{
    constructor(){
        let $ = document.querySelector.bind(document)
        this.inputUsuario = $("#user")
        this.inputSenha = $("#pword")
        this.alerter =new LoginView()
        
    }
    submit(event){
        event.preventDefault()
        console.log(this.inputUsuario.value)
        console.log(this.inputSenha.value)
        if(this.inputUsuario.value == "ricardo" && this.inputSenha.value ==("feitosa")){
        this.alerter.sucess()
        location.href = "postitboard.html"
        }
        else{
           this.alerter.failure()
           this.cleanform()
        }

    }

    cleanform (){
        this.inputUsuario.value =""
        this.inputSenha.value= ""
    }


}