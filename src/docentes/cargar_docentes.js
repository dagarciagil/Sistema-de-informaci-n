const galeria = document.getElementById('galeria');

// nombre_citaciones, nacionalidad, formación, Areas_actuacion, Par_evaludaror
const cargarDocentes = (nombre, ruta, nombre_citaciones, nacionalidad, formacion, areas_actuacion, par_evaluador) => {
    galeria.querySelector('.galeria__nombre').innerHTML = nombre;
    galeria.querySelector('.galeria__imagen').src = ruta;
    galeria.querySelector('.galeria__nombre_citaciones').innerHTML = 
    `<span style="color: #e74c3c;">${nombre_citaciones}</span>`;
    galeria.querySelector('.galeria__nacionalidad').innerHTML = nacionalidad;
    galeria.querySelector('.galeria__formacion').innerHTML = formacion;
    galeria.querySelector('.galeria__area-actuacion').innerHTML = areas_actuacion;
    galeria.querySelector('.galeria__par-evaluador').innerHTML = par_evaluador;
};

export { cargarDocentes };
