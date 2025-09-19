"use strict";

/* const datos_generales = [
      { 
        "nombre": "Alma",
         "semestre": 9,
         "carrera": "sistemas",
         "horas": [1,2,3] 
      },
      {
         "nombre": "Ana",
         "semestre": 7,
         "carrera": "gestion",
         "horas": [1,2,3,4] 
      },
      {
         "nombre": "jose",
          "semestre": 1,
         "carrera": "industrial",
         "horas": [1,2] 
      },
    ]; */
/* 
    function agregarEstudiante() {
      const nombre = document.getElementById('nombre').value;
      const semestre = parseInt(document.getElementById('semestre').value);
      const carrera = document.getElementById('carrera').value;
      const horas = document.getElementById('horas').value.split(',').map(Number);

      datos_generales.push({ nombre, semestre, carrera, horas });

      // Mostrar todos los datos en la consola
      for (let i = 0; i < datos_generales.length; i++) {
        const est = datos_generales[i];
        console.log('Nombre: ' + est.nombre);
        console.log('Semestre: ' + est.semestre);
        console.log('Carrera: ' + est.carrera);
        console.log('Horas: ' + est.horas.join(', '));
        console.log('-------------------------');
      }
    } */

/* let arreglo1=[1,2,3,4];
let arreglo2=[5,6,7,8];
let arreglo3=[];
  console.log(arreglo1);
console.log(arreglo2);
arreglo3 =[...arreglo1 , ...arreglo2];
console.log(arreglo3); */

var arreglo = [1, 2, 3, 4];
console.log("original", arreglo);
var arreglo2 = [].concat(arreglo);
console.log("arrelo original", arreglo);
console.log("arrelo copia", arreglo2);
arreglo2.push(5);
arreglo.push(6);
console.log("arrelo original", arreglo);
console.log("arrelo copia", arreglo2);
var funncion_multiple_arg = function funncion_multiple_arg() {
  for (var _len = arguments.length, dato = new Array(_len), _key = 0; _key < _len; _key++) {
    dato[_key] = arguments[_key];
  }
  var dt1 = dato[0],
    dt2 = dato[1],
    dt3 = dato[2];
  //cuando conoces el numero de datos puedes mostrarlos asi
  console.log(dt1);
  console.log(dt2);
  console.log(dt3);
  dato.map(function (dt) {
    return console.log(dt);
  }); //en caso de que no se conozca el numero de datos
};
funncion_multiple_arg.apply(void 0, ["Alma", "sis", "yo", 3]);