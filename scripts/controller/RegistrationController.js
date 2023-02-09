class RegistrationController{
    constructor(){
        let $ = document.querySelector.bind(document)
        this.inputUsuario = $("#user")
        this.inputSenha = $("#pword")
        this.alerter =new LoginView()
        this.loginlist = new LoginList
       
        
    }
    

    cleanform (){
        this.inputUsuario.value =""
        this.inputSenha.value= ""
    }
   register(event){
        event.preventDefault()
        alert("registro realizado com sucesso!")
        this.loginlist.adiciona(this.inputUsuario.value,this.inputSenha.value)
        this.cleanform()
        
   }
}