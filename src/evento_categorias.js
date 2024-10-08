import dataDocentes from './data/docentes';
import { cargarDocentes } from './docentes/cargar_docentes'

const contenedorCategorias = document.getElementById('categorias')
const galeria = document.getElementById('galeria')
let categoriaActiva;

// Agregamos el event listener a las categorias.
contenedorCategorias.addEventListener('click', (e) => {
    e.preventDefault();

    // Comprobamos que lo que se le hace click contenga el data-categoria.
    if (e.target.closest('a')) {
        categoriaActiva = e.target.closest('a').dataset.categoria;
        galeria.dataset.categoria = categoriaActiva;

        // Obtenemos las fotos que corresponden a la categoria
        const docentes = dataDocentes.docentes[categoriaActiva];

        // Agregamos un overflow hidden al body.
        document.body.style.overflow = 'hidden';
        // Agregamos la clase active a la galeria.
        galeria.classList.add('galeria--active');

        // Tomamos la informacion de la primera imagen de la categoria y la cargamos en el DOM.
        const { nombre, ruta, nombre_citaciones, nacionalidad, formacion, Areas_actuacion, Par_evaludaror } = docentes[0];
        cargarDocentes(nombre, ruta, nombre_citaciones, nacionalidad, formacion, Areas_actuacion, Par_evaludaror);

    }
});

