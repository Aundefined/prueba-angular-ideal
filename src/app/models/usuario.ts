export class Usuario {

    public  nombre:string;
    public  password:string;

    constructor(nom?:string, pass?:string){

        this.nombre = nom;
        this.password = pass;

    }
}