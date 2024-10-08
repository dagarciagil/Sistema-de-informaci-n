const galeria = document.getElementById('galeria');

const cerrarGaleria = () => {
    // Agregamos un overflow hidden al body.
    document.body.style.overflow = '';

    // Agregamos la clase active a la galeria.
    galeria.classList.remove('galeria--active');
};

galeria.addEventListener('click', (e) => {
    e.preventDefault();

    const boton = e.target.closest('button');

    // - - - CERRAR GALERIA
    // Accedemos al boton mas cercano. Esto para evitar obtener el svg o path.
    // Si tiene un dataset y un accion y es igual a cerrar-galeria, cerramos la galeria.
    if (boton?.dataset?.accion === 'cerrar-galeria' || e.target?.dataset?.accion === 'cerrar-galeria') {
        cerrarGaleria();
    }
});
