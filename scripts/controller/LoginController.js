class LoginController{
    constructor(){
        let $ = document.querySelector.bind(document)
        this.inputUsuario = $("#user")
        this.inputSenha = $("#pword")
        this.alerter =new LoginView()
        this.loginlist = new LoginList
       
        
    }
    submit(event){
        event.preventDefault()
        console.log(this.inputUsuario.value)
        console.log(this.inputSenha.value)
        if(loginarray.includes(this.inputUsuario.value) && loginarray.includes(this.inputSenha.value)){
        this.alerter.sucess()
        location.href = "postitboard.html"
        }
        else{
           this.alerter.failure()
           this.loginlist.adiciona(this.inputUsuario.value,this.inputSenha.value)
           this.cleanform()
        }

    }

    cleanform (){
        this.inputUsuario.value =""
        this.inputSenha.value= ""
    }
   register(event){
        event.preventDefault()
        alert("redirecionando-o para a pagina de registro")
        location.href ="resgistrationpage.html"
   }
    
    


}