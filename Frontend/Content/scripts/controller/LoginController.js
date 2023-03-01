class LoginController{
    constructor(){
        let $ = document.querySelector.bind(document)
        this.inputUsuario = $("#user")
        this.inputSenha = $("#pword")
        this.alerter =new LoginView()
        this.loginlist = new LoginList
       
        
    }
    submit(event){
      const usuario = this.inputUsuario
      const senha = this.inputSenha
      const parametros = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: '{"username":"ricardo","password":"edson"}',
      };
        event.preventDefault()
        fetch('http://localhost:3001/api/auth', parametros)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          })
      .catch(error => {
        console.log("aqui é o erro")
        console.error(error);
      });
        console.log(this.inputUsuario.value)
        console.log(this.inputSenha.value)
               
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