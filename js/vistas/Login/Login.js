class Login{
    mensajes = {};
    constantes = {
        root : "root",
        btnIngresar : "btnIngresar",
        txtUser : "txtUser",
        txtPass : "txtPass"
    };
    textos = {
        Ingresar : "Ingresar",
        placeholder : {
            txtUser : "Usuario",
            txtPass : "Contraseña"
        }
    }
    root;
    constructor(){
        let utiles = new Utiles();
        this.root = document.getElementById(utiles.Constantes.Identificadores.root);
    }

    Iniciar(){
        this.root.innerHTML = "";

        let div = document.createElement("div");
        this.root.appendChild(div);

        let divUser = document.createElement("div");
        let divPass = document.createElement("div");
        let divBoton = document.createElement("div");
        div.appendChild(divUser);
        div.appendChild(divPass);
        div.appendChild(divBoton);

        let txtUser = document.createElement("input");
        txtUser.placeholder = this.textos.placeholder.txtUser;
        txtUser.type = "text";
        divUser.appendChild(txtUser);

        let txtPass = document.createElement("input");
        txtPass.placeholder = this.textos.placeholder.txtPass;
        txtPass.type = "password";
        divPass.appendChild(txtPass);

        let btnIngresar = document.createElement("button");
        btnIngresar.innerHTML= this.textos.Ingresar;
        btnIngresar.onclick = function () {
            alert(txtUser.value + txtPass.value);
        }
        divBoton.appendChild(btnIngresar);
    }
}