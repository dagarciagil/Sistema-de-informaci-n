'use strict';

//Exportamos un array de objetos con los datos requeridos por cada docente para mostrar en una caja
var dataCategorias = {
    categorias:[
        { id: 'Quevedo', nombre: 'Jorge Quevedo', imagenPortada: './img/docentes/JorgeQuevedo.jpg' },
        { id: 'Gordillo', nombre: 'Wilson Gordillo', imagenPortada: './img/docentes/WilsonGordillo.jpg' },
        { id: 'Fajardo', nombre: 'Alba Fajardo', imagenPortada: './img/docentes/iconopersonaF.jpg' },
        { id: 'Merchan', nombre: 'Ana Merchan', imagenPortada: './img/docentes/Anamerchan.jpg' },
        { id: 'Buitrago', nombre: 'Bernabe Buitrago', imagenPortada: './img/docentes/iconopersonaM.jpg' },
        { id: 'Eli', nombre: 'Campo Eli', imagenPortada: './img/docentes/CampoEli.jpg' },
        { id: 'Peña', nombre: 'Edgar Peña', imagenPortada: './img/docentes/EdgarPeña.jpg' },
        { id: 'Vargas', nombre: 'Edna Vargas', imagenPortada: './img/docentes/EdnaVargas.jpg' },
        { id: 'Vasquez', nombre: 'Eva Vasquez', imagenPortada: './img/docentes/EvaVasquez.jpg' },
        { id: 'Lanza', nombre: 'Gustavo Lanza', imagenPortada: './img/docentes/iconopersonaM.jpg' },
        { id: 'Moreno', nombre: 'Jimmy Moreno', imagenPortada: './img/docentes/JimmyMoreno.jpg' },
        { id: 'Pardo', nombre: 'Jorge Pardo', imagenPortada: './img/docentes/JorgePardo.jpg' },
        { id: 'Sotelo', nombre: 'Jose Sotelo', imagenPortada: './img/docentes/iconopersonaM.jpg' },
        { id: 'Lozano', nombre: 'Juan Lozano', imagenPortada: './img/docentes/JuanLozano.jpg' },
        { id: 'Veloza', nombre: 'Juanita Veloza', imagenPortada: './img/docentes/JuanitaVeloza.jpg' },
        { id: 'Infante', nombre: 'Kelly Infante', imagenPortada: './img/docentes/iconopersonaF.jpg' },
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
                nombre_citaciones: '<span style="color: red"; style="font-style:bolder";>Nombre en citaciones: </span> <br> QUEVEDO BUITRAGO, <strong style="color: blue;">JORGE ENRIQUE</strong>',
                nacionalidad: '🌎 Nacionalidad \n Colombiana',
                formacion: 
                  'Formación: \n Maestría/Magister UNIVERSIDAD TECNOLÓGICA DE PEREIRA \n Especialización FUNDACIÓN UNIVERSITARIA LOS LIBERTADORES \n Pregrado/Universitario UNIVERSIDAD DE CUNDINAMARCA',
                areas_actuacion: '🕵️ Areas de actuación: \n Ciencias Naturales -- Matemática -- Estadísticas y Probabilidades (Investigación en Metodologías)',
                par_evaluador: 'Par evaluador: \n Ámbito: Nacional \n Par evaluador de: \n Proyecto Institución: Secretaria de educacion del municipio de Fusagasuga, 2014, Septiembre  \n Ámbito: Nacional \n Par evaluador de: \n Proyecto  Institución: Fundacion Red Colombiana de Semilleros de Investigacion RedColsi - Nodo Bogota,  2023,  Enero  ',
            },
        ],
        Gordillo: [
            {
                id: 2,
                nombre: 'Wilson Daniel Gordillo Ochoa',
                ruta: './img/docentes/WilsonGordillo.jpg',
                nombre_citaciones: '--> Nombre en citaciónes \n GORDILLO OCHOA, WILSON DANIEL',
                nacionalidad: '🌎 Nacionalidad \n Colombiana',
                formacion:
                    'Formación: \n Maestría/Magister UNIVERSIDAD COOPERATIVA DE COLOMBIA \n 	Especialización UNIVERSIDAD COOPERATIVA DE COLOMBIA \n 	Especialización UNIVERSIDAD COOPERATIVA DE COLOMBIA-Docencia universitaria \n 	Pregrado/Universitario Corporación Universidad Piloto De Colombia',
                areas_actuacion: '🕵️ Areas de actuación: \n Ciencias Naturales -- Computación y Ciencias de la Información -- Ciencias de la Computación \n Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Ingeniería de Sistemas y Comunicaciones \n Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Telecomunicaciones',
                par_evaluador: ' ',
            },
        ],
        Fajardo: [
            {
                id: 3,
                nombre: 'Alba Gissela Fajardo Ortíz',
                ruta: './img/docentes/iconopersonaF.jpg',
                nombre_citaciones: '--> Nombre en citaciónes  \n FAJARDO ORTÍZ, ALBA GISSELA',
                nacionalidad: '🌎 Nacionalidad \n Colombiana',
                formacion:
                    'Formación: \n 	Doctorado UNIVERSIDAD AUTÓNOMA CHAPINGO \n 	Maestría/Magister UNIVERSIDAD AUTÓNOMA CHAPINGO \n Especialización UNIVERSIDAD NACIONAL DE COLOMBIA \n Pregrado/Universitario UNIVERSIDAD DE CUNDINAMARCA   ',
                areas_actuacion: '🕵️ Areas de actuación: \n Ciencias Agrícolas -- Biotecnología Agrícola -- Biotecnología Agrícola y de Alimentos \n Ciencias Agrícolas -- Agricultura, Silvicultura y Pesca -- Agronomía',
                par_evaluador: '',
            },
        ],
        Merchan: [
            {
                id: 4,
                nombre: 'Ana Esperanza Merchan Hernandez',
                ruta: './img/docentes/AnaMerchan.jpg',
                nombre_citaciones: '--> Nombre en citaciónes  \n MERCHAN HERNANDEZ, ANA ESPERANZA',
                nacionalidad: '🌎 Nacionalidad \n Colombiana',
                formacion:
                    'Formación: \n Maestría/Magister Universidad Oberta de Cataluña \n Especialización UNIVERSIDAD SANTO TOMAS \n Pregrado/Universitario UNIVERSIDAD CENTRAL',
                areas_actuacion: '🕵️ Areas de actuación: \n  Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Ingeniería de Sistemas y Comunicaciones',
                par_evaluador: '',
            },
        ],
        Buitrago: [
            {
                id: 5,
                nombre: 'Bernabe Buitrago Dominguez',
                ruta: './img/docentes/iconopersonaM.jpg',
                nombre_citaciones: '--> Nombre en citaciónes  \n BUITRAGO DOMINGUEZ, BERNABE',
                nacionalidad: '🌎 Nacionalidad \n Colombiana',
                formacion:
                    'Formación: \n Maestría/Magister UNIVERSIDAD TECNOLÓGICA DE PEREIRA \n 	Especialización FUNDACIÓN UNIVERSITARIA LOS LIBERTADORES \n Pregrado/Universitario UNIVERSIDAD DE CUNDINAMARCA',
                areas_actuacion: '🕵️ Areas de actuación: \n Ciencias Naturales -- Matemática -- Estadísticas y Probabilidades (Investigación en Metodologías)',
                par_evaluador: 'Par Evaluador: \n Ámbito: Nacional  Par evaluador de: Proyecto  Institución: Secretaria de educacion del municipio de Fusagasuga,  2014,  Septiembre ',
            },
        ],
        Eli: [
            {
                id: 6,
                nombre: 'Campo Eli Castillo Eraso',
                ruta: './img/docentes/CampoEli.jpg',
                nombre_citaciones: '--> Nombre en citaciónes \n CASTILLO ERASO, CAMPO ELI',
                nacionalidad: '🌎 Nacionalidad \n Colombiana',
                formacion:
                    'Formación: \n Especialización CORPORACIÓN UNIVERSITARIA REMINGTON \n 	Pregrado/Universitario Fundacion Universidad Incca De Colombia \n Secundario Instituto Champagnat \n Primaria Instituto San Juan Bosco',
                areas_actuacion: '🕵️ Areas de actuación: \n  Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Ingeniería de Sistemas y Comunicaciones',
                par_evaluador: '',
            },
        ],
        Peña: [
            {
                id: 7,
                nombre: 'Edgar Alfonso Peña Albarracin',
                ruta: './img/docentes/EdgarPeña.jpg',
                nombre_citaciones: '--> Nombre en citaciónes  \n PEÑA ALBARRACIN, EDGAR ALFONSO',
                nacionalidad: '🌎 Nacionalidad \n Colombiana',
                formacion:
                    'Formación: \n Maestría/Magister CORPORACIÓN UNIVERSITARIA MINUTO DE DIOS - UNIMINUTO \n Pregrado/Universitario CORPORACIÓN UNIVERSITARIA MINUTO DE DIOS - UNIMINUTO \n Técnico - nivel superior CORPORACIÓN UNIVERSITARIA MINUTO DE DIOS - UNIMINUTO \n Secundario Inem Francisco De Paula Santander - Kennedy',
                areas_actuacion: '🕵️ Areas de actuación: \n   Ciencias Sociales -- Ciencias de la Educación -- Educación General (Incluye Capacitación, Pedagogía) \n  Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Hardware y Arquitectura de Computadores \n  Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Telecomunicaciones \n Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Robótica y Control Automático \n  Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Ingeniería de Sistemas y Comunicaciones',
                par_evaluador: 'Par Evaluador: \n Ámbito: Nacional  Par evaluador de: Material para publicación científica  Revista: Revista Perspectivas De La Investigación,  2024,  Junio  ',
            },
        ],
        Vargas: [
            {
                id: 8,
                nombre: 'Edna Alexandra Vargas Clavijo',
                ruta: './img/docentes/EdnaVargas.jpg',
                nombre_citaciones: '--> Nombre en citaciónes \n VARGAS CLAVIJO, EDNA ALEXANDRA',
                nacionalidad: '🌎 Nacionalidad \n Colombiana',
                formacion:
                    'Formación: \n Especialización UNIVERSIDAD DISTRITAL FRANCISCO JOSÉ DE CALDAS \n Pregrado/Universitario UNIVERSIDAD DISTRITAL FRANCISCO JOSÉ DE CALDAS',
                areas_actuacion: '🕵️ Areas de actuación:\n Ciencias Sociales -- Ciencias de la Educación -- Educación General (Incluye Capacitación, Pedagogía)',
                par_evaluador: '',
            },
        ],
        Vasquez: [
            {
                id: 9,
                nombre: 'Eva Patricia Vasquez Gomez',
                ruta: './img/docentes/EvaVasquez.jpg',
                nombre_citaciones: '--> Nombre en citaciónes  \n VASQUEZ GOMEZ, EVA PATRICIA',
                nacionalidad: '🌎 Nacionalidad \n Colombiana',
                formacion:
                    'Formación: \n Maestría/Magister Universitat Oberta de Catalunya \n Especialización Escuela de Comunicaciones Militares \n Pregrado/Universitario Fundacion Universidad Incca De Colombia',
                areas_actuacion: '🕵️ Areas de actuación:\n Ciencias Sociales -- Ciencias de la Educación -- Educación General (Incluye Capacitación, Pedagogía)',
                par_evaluador: '',
            },
        ],
        Lanza: [
            {
                id: 9,
                nombre: 'Gustavo Adolfo Lanza Bayona',
                ruta: './img/docentes/iconopersonaM.jpg',
                nombre_citaciones: '--> Nombre en citaciónes \n LANZA BAYONA, GUSTAVO ADOLFO',
                nacionalidad: '🌎 Nacionalidad \n Colombiana',
                formacion:
                    'Formación: \n 	Doctorado UNIVERSIDAD DE LOS ANDES \n Maestría/Magister Pontifícia Universidade Católica Do Rio De Janeiro \n Pregrado/Universitario UNIVERSIDAD DE CUNDINAMARCA',
                areas_actuacion: '🕵️ Areas de actuación:\n Ciencias Naturales -- Ciencias Físicas -- Física de la Materia \n Ingeniería y Tecnología -- Nanotecnología -- Nanomateriales (Producción y Propiedades) \n  Ingeniería y Tecnología -- Nanotecnología -- Nanoprocesos (Aplicaciones a Nanoescala)',
                par_evaluador: '',
            },
        ],
        Moreno: [
            {
                id: 10,
                nombre: 'Jimmy Efren Moreno Sandoval',
                ruta: './img/docentes/JimmyMoreno.jpg',
                nombre_citaciones: '--> Nombre en citaciónes \n MORENO SANDOVAL, JIMMY EFREN',
                nacionalidad: '🌎 Nacionalidad \n Colombiana',
                formacion:
                    'Formación: \n Maestría/Magister Universidad Internacional de la Rioja \n Especialización UNIVERSIDAD DE CUNDINAMARCA FGGA \n 	Pregrado/Universitario UNIVERSIDAD DE CUNDINAMARCA FGGA',
                areas_actuacion: '🕵️ Areas de actuación:\n - Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Ingeniería Eléctrica y Electrónica \n Ciencias Sociales -- Ciencias de la Educación -- Educación General (Incluye Capacitación, Pedagogía) \n  Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Robótica y Control Automático \n  Ciencias Sociales -- Ciencias de la Educación -- Educación Especial (para Estudiantes Dotados y Aquellos con Dificultades del Aprendizaje) \n  Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Ingeniería de Sistemas y Comunicaciones \n Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Hardware y Arquitectura de Computadores \n  Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Automatización y Sistemas de Control',
                par_evaluador: '',
            },
        ],
        Pardo: [
            {
                id: 11,
                nombre: 'Jorge Rolando Pardo Morales',
                ruta: './img/docentes/JorgePardo.jpg',
                nombre_citaciones: '--> Nombre en citaciónes  \n PARDO MORALES, JORGE ROLANDO',
                nacionalidad: '🌎 Nacionalidad \n Colombiana',
                formacion:
                    'Formación: \n 	Especialización INSTITUCIÓN UNIVERSITARIA POLITÉCNICO GRANCOLOMBIANO \n Pregrado/Universitario UNIVERSIDAD DE CUNDINAMARCA',
                areas_actuacion: 'Areas de actuación:\n Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Ingeniería de Sistemas y Comunicaciones \n  Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Telecomunicaciones \n  Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Hardware y Arquitectura de Computadores \n  Ingeniería y Tecnología -- Otras Ingenierías y Tecnologías -- Otras Ingenierías y Tecnologías \n Ciencias Sociales -- Economía y Negocios -- Economía \n Ciencias Sociales -- Economía y Negocios -- Negocios y Management \n Ciencias Sociales -- Ciencias de la Educación -- Educación General (Incluye Capacitación, Pedagogía) \n Ciencias Sociales -- Otras Ciencias Sociales -- Otras Ciencias Sociales \n Humanidades -- Idiomas y Literatura -- Idiomas Específicos \n  Humanidades -- Arte -- Diseño',
                par_evaluador: '',
            },
        ],
        Lozano: [
            {
                id: 12,
                nombre: 'Juan Jairo Lozano Carvajal',
                ruta: './img/docentes/JuanLozano.jpg',
                nombre_citaciones: '✍️Nombre en citaciones \n PARDO MORALES, JORGE ROLANDO',
                nacionalidad: '🌎 Nacionalidad \n Colombiana',
                formacion:
                    'Formación: \n Maestría/Magister UNIVERSIDAD DEL TOLIMA \n Especialización Corporación Universidad Piloto De Colombia - Sede Girardot \n 	Pregrado/Universitario Corporación Universidad Piloto De Colombia - Sede Girardot',
                areas_actuacion: 'Areas de actuación:\n  Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Ingeniería de Sistemas y Comunicaciones \n  Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Telecomunicaciones \n  Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Hardware y Arquitectura de Computadores \n Ingeniería y Tecnología -- Otras Ingenierías y Tecnologías -- Otras Ingenierías y Tecnologías \n  Ciencias Sociales -- Ciencias de la Educación -- Educación General (Incluye Capacitación, Pedagogía)',
                par_evaluador: '',
            },
        ],
    },
};

const galeria$2 = document.getElementById('galeria');

// nombre_citaciones, nacionalidad, formación, Areas_actuacion, Par_evaludaror
const cargarDocentes = (nombre, ruta, nombre_citaciones, nacionalidad, formacion, areas_actuacion, par_evaluador) => {
    galeria$2.querySelector('.galeria__nombre').innerHTML = nombre;
    galeria$2.querySelector('.galeria__imagen').src = ruta;
    galeria$2.querySelector('.galeria__nombre_citaciones').innerHTML = 
    `<span style="color: #e74c3c;">${nombre_citaciones}</span>`;
    galeria$2.querySelector('.galeria__nacionalidad').innerHTML = nacionalidad;
    galeria$2.querySelector('.galeria__formacion').innerHTML = formacion;
    galeria$2.querySelector('.galeria__area-actuacion').innerHTML = areas_actuacion;
    galeria$2.querySelector('.galeria__par-evaluador').innerHTML = par_evaluador;
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
        const { nombre, ruta, nombre_citaciones, nacionalidad, formacion, areas_actuacion, par_evaluador } = docentes[0];
        cargarDocentes(nombre, ruta, nombre_citaciones, nacionalidad, formacion, areas_actuacion, par_evaluador);
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
