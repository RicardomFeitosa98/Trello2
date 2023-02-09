class Login{
    constructor(usuario,senha){
       this.usuario = usuario
       this.senha = senha
       Object.freeze(this)
    }
    get usuario () {

        return this.usuario

    }

    get senha () {

        return this.senha
    }

}