import dataDocentes from './data/docentes';
import { cargarDocentes } from './docentes/cargar_docentes'

const contenedorCategorias = document.getElementById('categorias')
const galeria = document.getElementById('galeria')


// Agregamos el event listener a las categorias.
contenedorCategorias.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Comprobamos que lo que se le hace click contenga el data-categoria.
    if (e.target.closest('a')) {
        // Agregamos la clase active a la galeria.
        galeria.classList.add('galeria--active');
        // Agregamos un overflow hidden al body.
        document.body.style.overflow = 'hidden';

        const categoriaActiva = e.target.dataset.categoria;
      
        // Obtenemos las fotos que corresponden a la categoria
        const docentes = dataDocentes.docentes[categoriaActiva]; 
    
        // Tomamos la informacion de la primera imagen de la categoria y la cargamos en el DOM.
        const { nombre, ruta, nombre_citaciones } = docentes[0];
        cargarDocentes(nombre, ruta, nombre_citaciones);
      
    }
});

