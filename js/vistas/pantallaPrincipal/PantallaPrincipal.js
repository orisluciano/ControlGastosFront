class PantallaPrincipal {
    mensajes = {};
    constantes = {
        root : "root",
        btnCrearUsuario : "btnUsuario",
        btnLogin : "btnLogin",
        divBotones : "divBotones"
    };
    textos = {
        crearUsuario : "Nuevo Usuario",
        login : "Login"
    }
    root;
    constructor(){
        this.root = document.getElementById(this.constantes.root);
    }

    Iniciar(){
        this.root.innerHTML = "";

        let divBotones = document.createElement("div");
        divBotones.id = this.constantes.divBotones;
        divBotones.className = "botonesDerecha";
        this.root.appendChild(divBotones);

        let nav = document.createElement("nav");
        divBotones.appendChild(nav);

        let btnCrearUsuario = document.createElement("button");
        btnCrearUsuario.innerHTML = this.textos.crearUsuario;
        btnCrearUsuario.onclick = function () {
            alert("proximamente");
        }
        nav.appendChild(btnCrearUsuario);

        let btnLogin = document.createElement("button");
        btnLogin.innerHTML = this.textos.login;
        btnLogin.onclick = function () {
            let login = new Login();
            login.Iniciar();
        }
        nav.appendChild(btnLogin);
    }
}