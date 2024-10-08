const galeria = document.getElementById('galeria');

// nombre_citaciones, nacionalidad, formación, Areas_actuacion, Par_evaludaror
const cargarDocentes = (nombre,ruta, nombre_citaciones) => {
    galeria.querySelector('.galeria__titulo').innerText = nombre;
    galeria.querySelector('.galeria__imagen').src = ruta;
    galeria.querySelector('.galeria__descripcion-imagen-activa').innerText = nombre_citaciones;
    // galeria.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;
    // galeria.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;
    // galeria.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;
};

export { cargarDocentes };
