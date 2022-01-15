class Login{
    mensajes = {
        camposVacios : "Alguno de los campos esta vacio",
        incorrecto : "Usuario o Contraseña incorrecto"
    };
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
        txtUser.id = this.constantes.txtUser;
        divUser.appendChild(txtUser);

        let txtPass = document.createElement("input");
        txtPass.placeholder = this.textos.placeholder.txtPass;
        txtPass.type = "password";
        txtPass.id = this.constantes.txtPass;
        divPass.appendChild(txtPass);

        let global = this;
        let btnIngresar = document.createElement("button");
        btnIngresar.innerHTML= this.textos.Ingresar;
        btnIngresar.onclick = function () {
            global.btnIngresarOnclick();
        }
        divBoton.appendChild(btnIngresar);
    }

    camposVacios(){
        let user = document.getElementById(this.constantes.txtUser);
        let pass = document.getElementById(this.constantes.txtPass);

        return (user.value === "" || pass.value === "");
    }

    validarUsuario(usuario, contraseña){
        return(usuario==="loris" && contraseña === "admin");
    }

    btnIngresarOnclick(){
        let user = document.getElementById(this.constantes.txtUser);
        let pass = document.getElementById(this.constantes.txtPass);
        if (this.camposVacios()) {
            alert("hay campos vacios");
        } else {
            let usuario = new Usuario(null, null, user.value, pass.value);
            if (this.validarUsuario(usuario.Usuario, usuario.Contraseña)) {
                let mPrin = new MenuPrincipal();
                mPrin.Iniciar();
            } else {
                alert(this.mensajes.incorrecto);
            }
        }
    }
}