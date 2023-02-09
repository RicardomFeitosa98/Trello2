class Login {

    constructor(usuario,senha) {

        Object.assign(this, {usuario,senha})
            Object.freeze(this);
    }

     

    get usuario() {

        return this.usuario;
    }

    get senha() {

        return this.senha;
    }
}