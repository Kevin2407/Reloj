let seccion = document.getElementById('contenedorPrincipal');
let color = document.getElementById('setcolor');
let boton = document.getElementById('botonSet');


function cambiarColor(){

    // switch(color){
    //     case "pink":
    //         seccion.className = 'mt-5 w-75 text-light pink';
    //         break;
    //     case "blue":
    //         seccion.className = 'mt-5 w-75 text-light blue';
    //         break;
    //     case "green":
    //         seccion.className = 'mt-5 w-75 text-light green';
    // }

    seccion.style.cssText = `text-shadow: 
    0 0 5px ${color.value},
    0 0 10px ${color.value},
    0 0 20px ${color.value},
    0 0 40px ${color.value},
    0 0 80px ${color.value},
    0 0 90px ${color.value},
    0 0 100px ${color.value},
    0 0 150px ${color.value};`;

}

function cambiarColorBoton() {
    boton.style.background = color.value;
}

function actualizarHora(){
    // obtener los datos del dia y hora actual
    let fecha = new Date(),
        horas = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds();
    // console.log(fecha);

    // agregar un 0 a los numeros menoes a 10
    if(horas < 10){
        horas = '0'+horas
    }
    if(minutos < 10){
        minutos = '0'+minutos
    }
    if(segundos < 10){
        segundos = '0'+segundos
    }

    // declarar elementos del html
    let pHoras = document.getElementById('horas'),
        pMinutos = document.getElementById('minutos'),
        pSegundos = document.getElementById('segundos'),
        pDSemana = document.getElementById('diaSemana'),
        pNumDia = document.getElementById('numDia'),
        pMes = document.getElementById('mes'),
        pAnio = document.getElementById('anio');

    // declarar dias y meses e arreglos
    let semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves','Viernes','Sabado']

    let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

        // asignar nuevos valores al relog

        pDSemana.innerHTML = semana[fecha.getDay()];
        pNumDia.innerHTML = fecha.getDate();
        pMes.innerHTML = meses[fecha.getMonth()];
        pAnio.innerHTML = fecha.getFullYear();
        
        pHoras.innerHTML = horas;
        pMinutos.innerHTML = minutos;
        pSegundos.innerHTML = segundos;
}

window.setInterval(actualizarHora,1000);

color.addEventListener("input", cambiarColorBoton);

boton.addEventListener("click",cambiarColor);



