'use strict';

//Exportamos un array de objetos con los datos requeridos por cada docente para mostrar en una caja
var dataCategorias = {
    categorias:[
        { id: 'Quevedo', nombre: 'Jorge Quevedo', imagenPortada: './img/docentes/JorgeQuevedo.jpg' },
        { id: 'Gordillo', nombre: 'Wilson Gordillo', imagenPortada: './img/docentes/WilsonGordillo.jpg' },
        { id: 'Fajardo', nombre: 'Alba Fajardo', imagenPortada: './img/europa.jpg' },
        { id: 'Merchan', nombre: 'Ana Merchan', imagenPortada: './img/docentes/Anamerchan.jpg' },
        { id: 'Buitrago', nombre: 'Bernabe Buitrago', imagenPortada: './img/america.jpg' },
        { id: 'Eli', nombre: 'Campo Eli', imagenPortada: './img/docentes/CampoEli.jpg' },
        { id: 'Peña', nombre: 'Edgar Peña', imagenPortada: './img/docentes/EdgarPeña.jpg' },
        { id: 'Vargas', nombre: 'Edna Vargas', imagenPortada: './img/docentes/EdnaVargas.jpg' },
        { id: 'vasquez', nombre: 'Eva Vasquez', imagenPortada: './img/docentes/EvaVasquez.jpg' },
        { id: 'Lanza', nombre: 'Gustavo Lanza', imagenPortada: './img/america.jpg' },
        { id: 'Moreno', nombre: 'Jimmy Moreno', imagenPortada: './img/docentes/JimmyMoreno.jpg' },
        { id: 'Pardo', nombre: 'Jorge Pardo', imagenPortada: './img/docentes/JorgePardo.jpg' },
        { id: 'Sotelo', nombre: 'Jose Sotelo', imagenPortada: './img/europa.jpg' },
        { id: 'Lozano', nombre: 'Juan Lozano', imagenPortada: './img/docentes/JuanLozano.jpg' },
        { id: 'Veloza', nombre: 'Juanita Veloza', imagenPortada: './img/docentes/JuanitaVeloza.jpg' },
        { id: 'Infante', nombre: 'Kelly Infante', imagenPortada: './img/america.jpg' },
        { id: 'Garzon', nombre: 'Luis Garzón', imagenPortada: './img/docentes/LuisGarzon.jpg' },
        { id: 'Pulido', nombre: 'Marcia Pulido', imagenPortada: './img/docentes/MarciaPulido.jpg' },
        { id: 'Rozo', nombre: 'Rosalba Rozo', imagenPortada: './img/docentes/RosalbaRozo.jpg' },
        { id: 'Pachon', nombre: 'Sandra Pachon', imagenPortada: './img/docentes/SandraPachon.jpg' },
    ],
};

const { categorias } = dataCategorias;
const contenedorCategorias$1 = document.getElementById('categorias');

categorias.forEach((categoria) => {
    const nuevaCategoria = document.createElement('a');
    const plantilla = `
		<img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
		<div class="categoria__datos">
			<p class="categoria__nombre">${categoria.nombre}</p>
		</div>
	`;

    // Agregamos la clase, href, dataset y la plantilla a la nueva categoria.
    nuevaCategoria.classList.add('categoria');
    nuevaCategoria.href = '#';
    nuevaCategoria.dataset.categoria = categoria.id;
    nuevaCategoria.innerHTML = plantilla;

    // Agregamos la categoria al contenedor de las categorias.
    contenedorCategorias$1.append(nuevaCategoria);
});

var dataDocentes = {
    docentes: {
        Quevedo: [
            {
                id: 1,
                nombre: 'Jorge Enrique Quevedo Buitrago',
                ruta: './img/docentes/JorgeQuevedo.jpg',
                nombre_citaciones: 'Nombre en citaciones: \n QUEVEDO BUITRAGO, JORGE ENRIQUE',
                // nacionalidad: 'Colombiana',
                // formación: 
                //   'Maestría/Magister UNIVERSIDAD TECNOLÓGICA DE PEREIRA \n Especialización FUNDACIÓN UNIVERSITARIA LOS LIBERTADORES \n Pregrado/Universitario UNIVERSIDAD DE CUNDINAMARCA',
                // Areas_actuacion: 'Ciencias Naturales -- Matemática -- Estadísticas y Probabilidades (Investigación en Metodologías)',
                // Par_evaludaror: 'Ámbito: Nacional  Par evaluador de: Proyecto  Institución: Secretaria de educacion del municipio de Fusagasuga,  2014,  Septiembre  \n Ámbito: Nacional  Par evaluador de: Proyecto  Institución: Fundacion Red Colombiana de Semilleros de Investigacion RedColsi - Nodo Bogota,  2023,  Enero  ',
                
            },
        ],
        Gordillo: [
            {
                id: 1,
                nombre: 'Wilson Daniel Gordillo Ochoa',
                ruta: './img/docentes/WilsonGordillo.jpg',
                nombre_citaciones: 'Nombre en citaciones: \n GORDILLO OCHOA, WILSON DANIEL',
                // nacionalidad: 'Colombiana',
                // formación:
                //     'Maestría/Magister UNIVERSIDAD COOPERATIVA DE COLOMBIA \n 	Especialización UNIVERSIDAD COOPERATIVA DE COLOMBIA \n 	Especialización UNIVERSIDAD COOPERATIVA DE COLOMBIA-Docencia universitaria \n 	Pregrado/Universitario Corporación Universidad Piloto De Colombia',
                // Areas_actuacion: 'Ciencias Naturales -- Computación y Ciencias de la Información -- Ciencias de la Computación \n Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Ingeniería de Sistemas y Comunicaciones \n Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Telecomunicaciones',
                // Par_evaludaror: ' ',
            },
        ],

    },
};

const galeria$2 = document.getElementById('galeria');

// nombre_citaciones, nacionalidad, formación, Areas_actuacion, Par_evaludaror
const cargarDocentes = (nombre,ruta, nombre_citaciones) => {
    galeria$2.querySelector('.galeria__titulo').innerText = nombre;
    galeria$2.querySelector('.galeria__imagen').src = ruta;
    galeria$2.querySelector('.galeria__descripcion-imagen-activa').innerText = nombre_citaciones;
    // galeria.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;
    // galeria.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;
    // galeria.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;
};

const contenedorCategorias = document.getElementById('categorias');
const galeria$1 = document.getElementById('galeria');
let categoriaActiva;

// Agregamos el event listener a las categorias.
contenedorCategorias.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Comprobamos que lo que se le hace click contenga el data-categoria.
    if (e.target.closest('a')) {
        categoriaActiva = e.target.closest('a').dataset.categoria;
        galeria$1.dataset.categoria = categoriaActiva;

        // Obtenemos las fotos que corresponden a la categoria
        const docentes = dataDocentes.docentes[categoriaActiva]; 
      
        // Agregamos un overflow hidden al body.
        document.body.style.overflow = 'hidden';
        // Agregamos la clase active a la galeria.
        galeria$1.classList.add('galeria--active');
       
        // Tomamos la informacion de la primera imagen de la categoria y la cargamos en el DOM.
        const { nombre, ruta, nombre_citaciones } = docentes[0];
        cargarDocentes(nombre, ruta, nombre_citaciones);
      
    }
});

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
//# sourceMappingURL=bundle.js.map
