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
      
      
      let arreglo=[1,2,3,4];
      console.log("original",arreglo);
      let arreglo2=[...arreglo];  
      console.log("arrelo original",arreglo);
      console.log("arrelo copia",arreglo2);
      arreglo2.push(5);
      arreglo.push(6);
      console.log("arrelo original",arreglo);
      console.log("arrelo copia",arreglo2);

      const funncion_multiple_arg =(...dato)=>{
        let [dt1,dt2,dt3]=dato
        //cuando conoces el numero de datos puedes mostrarlos asi
        console.log(dt1);
        console.log(dt2);
        console.log(dt3);

        dato.map(dt=>console.log(dt));//en caso de que no se conozca el numero de datos
        
      }
      funncion_multiple_arg(...["Alma","sis","yo",3]);