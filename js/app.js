function cambiarColor(color){
    let seccion = document.getElementById('contenedorPrincipal');
    

    switch(color){
        case "pink":
            seccion.className = 'mt-5 w-75 text-light pink';
            break;
        case "blue":
            seccion.className = 'mt-5 w-75 text-light blue';
            break;
        case "green":
            seccion.className = 'mt-5 w-75 text-light green';
    }
}

function actualizarHora(){
    let fecha = new Date(),
        horas = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds();
    // console.log(fecha);

    if(horas < 10){
        horas = '0'+horas
    }
    if(minutos < 10){
        minutos = '0'+minutos
    }
    if(segundos < 10){
        segundos = '0'+segundos
    }

    let pHoras = document.getElementById('horas'),
        pMinutos = document.getElementById('minutos'),
        pSegundos = document.getElementById('segundos'),
        pDSemana = document.getElementById('diaSemana'),
        pNumDia = document.getElementById('numDia'),
        pMes = document.getElementById('mes'),
        pAnio = document.getElementById('anio');

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



