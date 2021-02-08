function actualizarHora() {
    let fecha = new Date(),
        horas = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds();

    let pHoras = document.getElementById('horas'),
        pMinutos = document.getElementById('minutos'),
        psegundos = document.getElementById('segundos'),
        pDiaSemana = document.getElementById('diaSemana'),
        pNumDia = document.getElementById('numDia'),
        pMes = document.getElementById('mes'),
        pAnio = document.getElementById('anio');

    let semanas = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    pDiaSemana.innerHTML = semanas[fecha.getDay()];

    pNumDia.innerHTML = fecha.getDate();

    let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    pMes.innerHTML = meses[fecha.getMonth()];
    pAnio.innerHTML = fecha.getFullYear();

    //asignar las horas, minutos y seg
    if (horas < 10) {
        horas = '0' + horas;
    }

    if (minutos < 10) {
        minutos = '0' + minutos;
    }

    if (segundos < 10) {
        segundos = '0' + segundos;
    }

    pHoras.innerHTML = horas;
    pMinutos.innerHTML = minutos;
    psegundos.innerHTML = segundos;
}

function cambiarColor(color) {
    let contenedor = document.getElementById('contenedorPrincipal');


    if (color == 'pink') {
        contenedor.className = 'w-75 pink';
    }
    if (color == 'green') {
        contenedor.className = 'w-75 green';
    }
    if (color == 'blue') {
        contenedor.className = 'w-75 blue';
    }

}

//actualiza la hora cada 1 segundo, 1000ms son 1seg
window.setInterval(actualizarHora, 1000);