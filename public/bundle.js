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
                nombre_citaciones: '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br> QUEVEDO BUITRAGO, JORGE ENRIQUE',
                nacionalidad: '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br>Colombiana',
                formacion:
                    '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> <strong style="color: black; font-size: 16px"> Maestría/Magister </strong> UNIVERSIDAD DEL TOLIMA - Investigación Operativa y Estadistica <br> </strong> <strong style="color: black; font-size: 16px"> Especialización </strong> FUNDACIÓN UNIVERSITARIA LOS LIBERTADORES - Estadistica Aplicada <br><strong style="color: black; font-size: 16px"> Pregrado/Universitario </strong>  UNIVERSIDAD DE CUNDINAMARCA - licenciatura en matematicas',
                areas_actuacion: '<strong style="color: black; font-size: 18px">🕵️ Áreas de actuación: </strong> <br> Ciencias Naturales -- Matemática -- Estadísticas y Probabilidades (Investigación en Metodologías)',
                par_evaluador: '<strong style="color: black; font-size: 18px"> Par evaluador: </strong><br> Ámbito: Nacional  Par evaluador de:  Proyecto Institución: Secretaria de educacion del municipio de Fusagasuga, 2014, Septiembre  <br> Ámbito: Nacional  Par evaluador de:   Proyecto  Institución: Fundacion Red Colombiana de Semilleros de Investigacion RedColsi - Nodo Bogota,  2023,  Enero  ',
            },
        ],
        Gordillo: [
            {
                id: 2,
                nombre: 'Wilson Daniel Gordillo Ochoa',
                ruta: './img/docentes/WilsonGordillo.jpg',
                nombre_citaciones: '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br> GORDILLO OCHOA, WILSON DANIEL',
                nacionalidad: '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
                formacion:
                    '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> <strong style="color: black; font-size: 16px"> Maestría/Magister </strong> UNIVERSIDAD COOPERATIVA DE COLOMBIA - EDUCACION <br> <strong style="color: black; font-size: 16px"> Especialización </strong> UNIVERSIDAD COOPERATIVA DE COLOMBIA - Redes y Telecomunicaciones <br> <strong style="color: black; font-size: 16px"> Especialización </strong> UNIVERSIDAD COOPERATIVA DE COLOMBIA - Docencia Universitaria <br> <strong style="color: black; font-size: 16px"> Pregrado/Universitario </strong>  Corporación Universidad Piloto De Colombia - Ingeniería de Sistemas',
                areas_actuacion: '<strong style="color: black; font-size: 18px">🕵️ Áreas de actuación: </strong> <br>  Ciencias Naturales -- Computación y Ciencias de la Información -- Ciencias de la Computación <br> Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Ingeniería de Sistemas y Comunicaciones <br> Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Telecomunicaciones',
                par_evaluador: '',
            },
        ],
        Fajardo: [
            {
                id: 3,
                nombre: 'Alba Gissela Fajardo Ortíz',
                ruta: './img/docentes/iconopersonaF.jpg',
                nombre_citaciones: '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br>FAJARDO ORTÍZ, ALBA GISSELA',
                nacionalidad: '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
                formacion:
                    '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> 	Doctorado UNIVERSIDAD AUTÓNOMA CHAPINGO <br> 	Maestría/Magister UNIVERSIDAD AUTÓNOMA CHAPINGO <br> Especialización UNIVERSIDAD NACIONAL DE COLOMBIA <br> Pregrado/Universitario UNIVERSIDAD DE CUNDINAMARCA   ',
                areas_actuacion: '<strong style="color: black; font-size: 18px">🕵️ Áreas de actuación: </strong> <br>  Ciencias Agrícolas -- Biotecnología Agrícola -- Biotecnología Agrícola y de Alimentos <br> Ciencias Agrícolas -- Agricultura, Silvicultura y Pesca -- Agronomía',
                par_evaluador: '',
            },
        ],
        Merchan: [
            {
                id: 4,
                nombre: 'Ana Esperanza Merchan Hernandez',
                ruta: './img/docentes/AnaMerchan.jpg',
                nombre_citaciones: '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br>MERCHAN HERNANDEZ, ANA ESPERANZA',
                nacionalidad: '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
                formacion:
                    '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> Maestría/Magister Universidad Oberta de Cataluña <br> Especialización UNIVERSIDAD SANTO TOMAS <br> Pregrado/Universitario UNIVERSIDAD CENTRAL',
                areas_actuacion: '<strong style="color: black; font-size: 18px">🕵️ Áreas de actuación: </strong> <br>   Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Ingeniería de Sistemas y Comunicaciones',
                par_evaluador: '',
            },
        ],
        Buitrago: [
            {
                id: 5,
                nombre: 'Bernabe Buitrago Dominguez',
                ruta: './img/docentes/iconopersonaM.jpg',
                nombre_citaciones: '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br>BUITRAGO DOMINGUEZ, BERNABE',
                nacionalidad: '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
                formacion:
                    '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> Maestría/Magister UNIVERSIDAD TECNOLÓGICA DE PEREIRA <br> 	Especialización FUNDACIÓN UNIVERSITARIA LOS LIBERTADORES <br> Pregrado/Universitario UNIVERSIDAD DE CUNDINAMARCA',
                areas_actuacion: '<strong style="color: black; font-size: 18px">🕵️ Áreas de actuación: </strong> <br>  Ciencias Naturales -- Matemática -- Estadísticas y Probabilidades (Investigación en Metodologías)',
                par_evaluador: '<strong style="color: black; font-size: 18px"> Par evaluador: </strong><br> Ámbito: Nacional  Par evaluador de: Proyecto  Institución: Secretaria de educacion del municipio de Fusagasuga,  2014,  Septiembre ',
            },
        ],
        Eli: [
            {
                id: 6,
                nombre: 'Campo Eli Castillo Eraso',
                ruta: './img/docentes/CampoEli.jpg',
                nombre_citaciones: '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br> CASTILLO ERASO, CAMPO ELI',
                nacionalidad: '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
                formacion:
                    '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> Especialización CORPORACIÓN UNIVERSITARIA REMINGTON <br> 	Pregrado/Universitario Fundacion Universidad Incca De Colombia <br> Secundario Instituto Champagnat <br> Primaria Instituto San Juan Bosco',
                areas_actuacion: '<strong style="color: black; font-size: 18px">🕵️ Áreas de actuación: </strong> <br>   Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Ingeniería de Sistemas y Comunicaciones',
                par_evaluador: '',
            },
        ],
        Peña: [
            {
                id: 7,
                nombre: 'Edgar Alfonso Peña Albarracin',
                ruta: './img/docentes/EdgarPeña.jpg',
                nombre_citaciones: '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br>PEÑA ALBARRACIN, EDGAR ALFONSO',
                nacionalidad: '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
                formacion:
                    '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> Maestría/Magister CORPORACIÓN UNIVERSITARIA MINUTO DE DIOS - UNIMINUTO <br> Pregrado/Universitario CORPORACIÓN UNIVERSITARIA MINUTO DE DIOS - UNIMINUTO <br> Técnico - nivel superior CORPORACIÓN UNIVERSITARIA MINUTO DE DIOS - UNIMINUTO <br> Secundario Inem Francisco De Paula Santander - Kennedy',
                areas_actuacion: '<strong style="color: black; font-size: 18px">🕵️ Áreas de actuación: </strong> <br>    Ciencias Sociales -- Ciencias de la Educación -- Educación General (Incluye Capacitación, Pedagogía) <br>  Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Hardware y Arquitectura de Computadores <br>  Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Telecomunicaciones <br> Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Robótica y Control Automático <br>  Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Ingeniería de Sistemas y Comunicaciones',
                par_evaluador: '<strong style="color: black; font-size: 18px"> Par evaluador: </strong><br> Ámbito: Nacional  Par evaluador de: Material para publicación científica  Revista: Revista Perspectivas De La Investigación,  2024,  Junio  ',
            },
        ],
        Vargas: [
            {
                id: 8,
                nombre: 'Edna Alexandra Vargas Clavijo',
                ruta: './img/docentes/EdnaVargas.jpg',
                nombre_citaciones: '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br> VARGAS CLAVIJO, EDNA ALEXANDRA',
                nacionalidad: '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
                formacion:
                    '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> Especialización UNIVERSIDAD DISTRITAL FRANCISCO JOSÉ DE CALDAS <br> Pregrado/Universitario UNIVERSIDAD DISTRITAL FRANCISCO JOSÉ DE CALDAS',
                areas_actuacion: '<strong style="color: black; font-size: 18px">🕵️ Áreas de actuación: </strong> <br>  Ciencias Sociales -- Ciencias de la Educación -- Educación General (Incluye Capacitación, Pedagogía)',
                par_evaluador: '',
            },
        ],
        Vasquez: [
            {
                id: 9,
                nombre: 'Eva Patricia Vasquez Gomez',
                ruta: './img/docentes/EvaVasquez.jpg',
                nombre_citaciones: '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br>VASQUEZ GOMEZ, EVA PATRICIA',
                nacionalidad: '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
                formacion:
                    '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> Maestría/Magister Universitat Oberta de Catalunya <br> Especialización Escuela de Comunicaciones Militares <br> Pregrado/Universitario Fundacion Universidad Incca De Colombia',
                areas_actuacion: '<strong style="color: black; font-size: 18px">🕵️ Áreas de actuación: </strong> <br>  Ciencias Sociales -- Ciencias de la Educación -- Educación General (Incluye Capacitación, Pedagogía)',
                par_evaluador: '',
            },
        ],
        Lanza: [
            {
                id: 9,
                nombre: 'Gustavo Adolfo Lanza Bayona',
                ruta: './img/docentes/iconopersonaM.jpg',
                nombre_citaciones: '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br> LANZA BAYONA, GUSTAVO ADOLFO',
                nacionalidad: '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
                formacion:
                    '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> 	Doctorado UNIVERSIDAD DE LOS ANDES <br> Maestría/Magister Pontifícia Universidade Católica Do Rio De Janeiro <br> Pregrado/Universitario UNIVERSIDAD DE CUNDINAMARCA',
                areas_actuacion: '<strong style="color: black; font-size: 18px">🕵️ Áreas de actuación: </strong> <br>  Ciencias Naturales -- Ciencias Físicas -- Física de la Materia <br> Ingeniería y Tecnología -- Nanotecnología -- Nanomateriales (Producción y Propiedades) <br>  Ingeniería y Tecnología -- Nanotecnología -- Nanoprocesos (Aplicaciones a Nanoescala)',
                par_evaluador: '',
            },
        ],
        Moreno: [
            {
                id: 10,
                nombre: 'Jimmy Efren Moreno Sandoval',
                ruta: './img/docentes/JimmyMoreno.jpg',
                nombre_citaciones: '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br> MORENO SANDOVAL, JIMMY EFREN',
                nacionalidad: '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
                formacion:
                    '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> Maestría/Magister Universidad Internacional de la Rioja <br> Especialización UNIVERSIDAD DE CUNDINAMARCA FGGA <br> 	Pregrado/Universitario UNIVERSIDAD DE CUNDINAMARCA FGGA',
                areas_actuacion: '<strong style="color: black; font-size: 18px">🕵️ Áreas de actuación: </strong> <br> Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Ingeniería Eléctrica y Electrónica <br> Ciencias Sociales -- Ciencias de la Educación -- Educación General (Incluye Capacitación, Pedagogía) <br>  Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Robótica y Control Automático <br>  Ciencias Sociales -- Ciencias de la Educación -- Educación Especial (para Estudiantes Dotados y Aquellos con Dificultades del Aprendizaje) <br>  Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Ingeniería de Sistemas y Comunicaciones <br> Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Hardware y Arquitectura de Computadores <br>  Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Automatización y Sistemas de Control',
                par_evaluador: '',
            },
        ],
        Pardo: [
            {
                id: 11,
                nombre: 'Jorge Rolando Pardo Morales',
                ruta: './img/docentes/JorgePardo.jpg',
                nombre_citaciones: '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br>PARDO MORALES, JORGE ROLANDO',
                nacionalidad: '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
                formacion:
                    '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> 	Especialización INSTITUCIÓN UNIVERSITARIA POLITÉCNICO GRANCOLOMBIANO <br> Pregrado/Universitario UNIVERSIDAD DE CUNDINAMARCA',
                areas_actuacion: '<strong style="color: black; font-size: 18px">🕵️ Áreas de actuación: </strong> <br>  Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Ingeniería de Sistemas y Comunicaciones <br>  Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Telecomunicaciones <br>  Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Hardware y Arquitectura de Computadores <br>  Ingeniería y Tecnología -- Otras Ingenierías y Tecnologías -- Otras Ingenierías y Tecnologías <br> Ciencias Sociales -- Economía y Negocios -- Economía <br> Ciencias Sociales -- Economía y Negocios -- Negocios y Management <br> Ciencias Sociales -- Ciencias de la Educación -- Educación General (Incluye Capacitación, Pedagogía) <br> Ciencias Sociales -- Otras Ciencias Sociales -- Otras Ciencias Sociales <br> Humanidades -- Idiomas y Literatura -- Idiomas Específicos <br>  Humanidades -- Arte -- Diseño',
                par_evaluador: '',
            },
        ],
        Sotelo: [
            {
                id: 12,
                nombre: 'Jose Fernando Sotelo Cubillos',
                ruta: './img/docentes/iconopersonaM.jpg',
                nombre_citaciones: '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br> SOTELO CUBILLOS, JOSE FERNANDO',
                nacionalidad: '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
                formacion:
                    '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> 	Maestría/Magister Universidat Oberta De Catalunya - Maestria en Software Libre <br> Especialización Corporación Universidad Piloto De Colombia - Sede Girardot <br> 	Pregrado/Universitario Corporación Universidad Piloto De Colombia - Sede Girardot',
                areas_actuacion: '<strong style="color: black; font-size: 18px">🕵️ Áreas de actuación: </strong> <br> Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Ingeniería de Sistemas y Comunicaciones <br>  Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Telecomunicaciones <br>  Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Hardware y Arquitectura de Computadores <br> Ingeniería y Tecnología -- Otras Ingenierías y Tecnologías -- Otras Ingenierías y Tecnologías <br>  Ciencias Sociales -- Ciencias de la Educación -- Educación General (Incluye Capacitación, Pedagogía)',
                par_evaluador: '',
            },
        ],
        Lozano: [
            {
                id: 13,
                nombre: 'Juan Jairo Lozano Carvajal',
                ruta: './img/docentes/JuanLozano.jpg',
                nombre_citaciones: '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br> PARDO MORALES, JORGE ROLANDO',
                nacionalidad: '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
                formacion:
                    '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> <strong style="color: black; font-size: 16px"> Maestría/Magister </strong> UNIVERSIDAD DEL TOLIMA <br> </strong> <strong style="color: black; font-size: 16px"> Especialización </strong> Corporación Universidad Piloto De Colombia - Sede Girardot <br> </strong><strong style="color: black; font-size: 16px"> Pregrado/Universitario </strong> Corporación Universidad Piloto De Colombia - Sede Girardot',
                areas_actuacion: '<strong style="color: black; font-size: 18px">🕵️ Áreas de actuación: </strong> <br> Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Ingeniería de Sistemas y Comunicaciones <br>  Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Telecomunicaciones <br>  Ingeniería y Tecnología -- Ingenierías Eléctrica, Electrónica e Informática -- Hardware y Arquitectura de Computadores <br> Ingeniería y Tecnología -- Otras Ingenierías y Tecnologías -- Otras Ingenierías y Tecnologías <br>  Ciencias Sociales -- Ciencias de la Educación -- Educación General (Incluye Capacitación, Pedagogía)',
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
    galeria$2.querySelector('.galeria__nombre_citaciones').innerHTML = nombre_citaciones;
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
