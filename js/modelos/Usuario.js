class Usuario extends BaseModel{
    Usuario;
    Contraseña;
    constructor(id, borrado, usuario, contraseña){
        super(id, borrado);
        this.Usuario = usuario;
        this.Contraseña = contraseña;
    }
}