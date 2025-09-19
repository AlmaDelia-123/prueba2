import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
/* ----POO en js---- */
import Main from "./Main.js";//importacion de clase Main del archivo Main.js
import { mostrar_alerta , mostrar_consola} from "./Metodos.js";//nombre entre llaves cuando exportas multiples elementos
class Persona extends Main {
    #nombre;
    #apellido;
    #edad;
    #sexo
    //inicializacion de constructor
    constructor(nombre,apellido,edad,sexo){
        super();//sobrecarga de metodos
        //this apunta a la clase en general (algo que ya existe dentro de la clase)
        this.#nombre=nombre;
        this.#apellido=apellido;
        this.#edad=edad;
        this.#sexo=sexo;
        
    }
    //las funciones seran llamados METODOS
    mostrar(){
        console.log(`
            Nombre:${this.#nombre},
            Apellido:${this.#apellido},
            Edad:${this.#edad},
            Sexo:${this.#sexo}
        `);     
        this.#saludar();     
    }
    //el # es para volverlo privado como private y solo se puede acceder dentro de la clase
    #saludar(){
        console.log("hola"); 
    }
    //para modificar los datos que ya son privados
    setNombre(nombre){
        this.#nombre=nombre;
    }
    getNombre(){
        return this.#nombre;
    }
//-------------------------------------------------
    setApellido(apellido){
        this.#apellido=apellido;
    }
    getApellido(){
        return this.#apellido;
    }
//-------------------------------------------------
    setEdad(edad){
        this.#edad=edad;
    }
    getEdad(){
        return this.#edad;
    }
//-------------------------------------------------
    setSexo(sexo){
        this.#sexo=sexo;
    }
    getSexo(){
        return this.#sexo;
    }
}
let persona1=new Persona("Alma","Diego",20,"F");
persona1.mostrar();
persona1.setApellido("test");
persona1.mostrar();

persona1.mostrar_info();
/* 
let objeto =new Main();
objeto.mostrar_info(); */
mostrar_alerta();
mostrar_consola();

/* let validacion = true;
let valor =validacion ? "hola" : "adios";//parador ternario en lugar de if
console.log(valor); */
//crear un programa de un juego todo por terminal