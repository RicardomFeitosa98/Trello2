class LoginController{
    constructor(){
        let $ = document.querySelector.bind(document)
        this.inputUsuario = $("#user")
        this.inputSenha = $("#pword")
        this.alerter =new LoginView()
        this.loginlist = new LoginList
       
        
    }
    submit(event){
      const parametros = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario, senha }),
      };
        event.preventDefault()
        fetch('http://localhost:3001/api/users', parametros)
        .then(response => response.json())
        .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
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