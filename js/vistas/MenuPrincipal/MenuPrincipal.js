class MenuPrincipal{
    mensajes = {};
    constantes = {
        root : "root",
        btnIngresos : "btnIngresos",
        btnGastos : "btnGastos",
        btnBalances : "btnBalances",
        divBotones : "divBotones"
    };
    textos = {
        ingresos : "Ingresos",
        gastos : "Gastos",
        balances : "Balances"

    }
    root;
    constructor(){
        this.root = document.getElementById(this.constantes.root);
    }

    Iniciar(){
        this.root.innerHTML = "";

        let divBotones = document.createElement("div");
        divBotones.id = this.constantes.divBotones;
        this.root.appendChild(divBotones);

        let nav = document.createElement("nav");
        divBotones.appendChild(nav);

        let btnIngresos = document.createElement("button");
        btnIngresos.innerHTML = this.textos.ingresos;
        btnIngresos.onclick = function () {
            alert("proximamente");
        }
        nav.appendChild(btnIngresos);

        let btnGastos = document.createElement("button");
        btnGastos.innerHTML = this.textos.gastos;
        btnGastos.onclick = function () {
            alert("Proximamente");
        }
        nav.appendChild(btnGastos);

        let btnBalances = document.createElement("button");
        btnBalances.innerHTML = this.textos.balances;
        btnBalances.onclick = function () {
            alert("Proximamente");
        }
        nav.appendChild(btnBalances);
    }
}