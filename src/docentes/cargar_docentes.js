const galeria = document.getElementById('galeria');

// nombre_citaciones, nacionalidad, formación, Areas_actuacion, Par_evaludaror
const cargarDocentes = (nombre, ruta, nombre_citaciones, nacionalidad, formacion, Areas_actuacion, Par_evaludaror) => {
    galeria.querySelector('.galeria__nombre').innerText = nombre;
    galeria.querySelector('.galeria__imagen').src = ruta;
    galeria.querySelector('.galeria__nombre_citaciones').innerText = nombre_citaciones;
    galeria.querySelector('.galeria__nacionalidad').innerText = nacionalidad;
    galeria.querySelector('.galeria__formacion').innerText = formacion;
    galeria.querySelector('.galeria__area-actuacion').innerText = Areas_actuacion;
    galeria.querySelector('.galeria__par-evaluador').innerText = Par_evaludaror;
};

export { cargarDocentes };
