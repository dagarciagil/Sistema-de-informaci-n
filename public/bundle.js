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
        nombre: "Jorge Enrique Quevedo Buitrago",
        ruta: "./img/docentes/JorgeQuevedo.jpg",
        nombre_citaciones:
          '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br> QUEVEDO BUITRAGO, JORGE ENRIQUE',
        nacionalidad:
          '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br>Colombiana',
        formacion:
          '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> <strong style="color: black; font-size: 16px"> Maestría/Magister </strong> UNIVERSIDAD DEL TOLIMA - Investigación Operativa y Estadistica <br> </strong> <strong style="color: black; font-size: 16px"> Especialización </strong> FUNDACIÓN UNIVERSITARIA LOS LIBERTADORES - Estadistica Aplicada <br><strong style="color: black; font-size: 16px"> Pregrado/Universitario </strong>  UNIVERSIDAD DE CUNDINAMARCA - licenciatura en matematicas',
        areas_actuacion:
          '<strong style="color: black; font-size: 18px">🕵️ Áreas de actuación: </strong> <br> <strong style="color: black; font-size: 16px"> 1. Ciencias Naturales </strong> <br> -- Matemática <br> -- Estadísticas y Probabilidades (Investigación en Metodologías)',
        par_evaluador:
          '<strong style="color: black; font-size: 18px"> Par evaluador: </strong> <br> <strong style="color: black; font-size: 16px"> 1. Ámbito: Nacional </strong> <br> -- Par evaluador de: No aplica <br> -- Proyecto  Institución: Fundación Red Colombiana de Semilleros de Investigación RedColsi - Nodo Bogota, 2023, Enero <br> <strong style="color: black; font-size: 16px"> 2. Ámbito: Nacional </strong> <br> -- Par evaluador de: No aplica <br> -- Proyecto Institución: Secretaria de educación del municipio de Fusagasugá, 2014, Septiembre',
      },
    ],
    Gordillo: [
      {
        id: 2,
        nombre: "Wilson Daniel Gordillo Ochoa",
        ruta: "./img/docentes/WilsonGordillo.jpg",
        nombre_citaciones:
          '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br> GORDILLO OCHOA, WILSON DANIEL',
        nacionalidad:
          '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
        formacion:
          '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> <strong style="color: black; font-size: 16px"> Maestría/Magister </strong> UNIVERSIDAD COOPERATIVA DE COLOMBIA - EDUCACION <br> <strong style="color: black; font-size: 16px"> Especialización </strong> UNIVERSIDAD COOPERATIVA DE COLOMBIA - Redes y Telecomunicaciones <br> <strong style="color: black; font-size: 16px"> Especialización </strong> UNIVERSIDAD COOPERATIVA DE COLOMBIA - Docencia Universitaria <br> <strong style="color: black; font-size: 16px"> Pregrado/Universitario </strong>  Corporación Universidad Piloto De Colombia - Ingeniería de Sistemas',
        areas_actuacion:
          '<strong style="color: black; font-size: 18px">🕵️ Áreas de actuación: </strong> <br><strong style="color: black; font-size: 16px"> 1. Ciencias Naturales </strong><br> -- Computación y Ciencias de la Información <br> -- Ciencias de la Computación <br><strong style="color: black; font-size: 16px">2. Ingeniería y Tecnología </strong><br> -- Ingenierías Eléctrica, Electrónica e Informática <br> -- Telecomunicaciones <br> -- Ingeniería de Sistemas y Comunicaciones',
        par_evaluador: "",
      },
    ],
    Fajardo: [
      {
        id: 3,
        nombre: "Alba Gissela Fajardo Ortíz",
        ruta: "./img/docentes/iconopersonaF.jpg",
        nombre_citaciones:
          '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br>FAJARDO ORTÍZ, ALBA GISSELA',
        nacionalidad:
          '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
        formacion:
          '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> <strong style="color: black; font-size: 16px">Doctorado</strong> UNIVERSIDAD AUTÓNOMA CHAPINGO - Ciencias en Horticultura <br> <strong style="color: black; font-size: 16px">Maestría/Magister</strong> UNIVERSIDAD AUTÓNOMA CHAPINGO - Ciencias en Agroforestería para el desarrollo sostenible <br> <strong style="color: black; font-size: 16px">Especialización </strong>UNIVERSIDAD NACIONAL DE COLOMBIA - FACULTAD DE AGRONOMIA <br> <strong style="color: black; font-size: 16px">Pregrado/Universitario</strong> UNIVERSIDAD DE CUNDINAMARCA - Ingeniería Agronómica',
        areas_actuacion:
          '<strong style="color: black; font-size: 18px">🕵️ Áreas de actuación: </strong> <br><strong style="color: black; font-size: 16px"> 1. Ciencias Agrícolas - Biotecnología Agrícola </strong> <br> -- Biotecnología Agrícola y de Alimentos <br> <strong style="color: black; font-size: 16px"> 2. Ciencias Agrícolas - Agricultura, Silvicultura y Pesca </strong><br> -- Agronomía',
        par_evaluador: "",
      },
    ],
    Merchan: [
      {
        id: 4,
        nombre: "Ana Esperanza Merchan Hernandez",
        ruta: "./img/docentes/AnaMerchan.jpg",
        nombre_citaciones:
          '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br>MERCHAN HERNANDEZ, ANA ESPERANZA',
        nacionalidad:
          '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
        formacion:
          '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> <strong style="color: black; font-size: 16px">Maestría/Magister</strong> Universidad Oberta de Cataluña - EDUCACION Y TIC <br> <strong style="color: black; font-size: 16px">Especialización</strong> UNIVERSIDAD SANTO TOMAS - Gestión empresarial <br> <strong style="color: black; font-size: 16px">Pregrado/Universitario</strong> UNIVERSIDAD CENTRAL - INGENIERIA',
        areas_actuacion:
          '<strong style="color: black; font-size: 18px">🕵️ Áreas de actuación: </strong> <br> <strong style="color: black; font-size: 16px"> 1. Ingeniería y Tecnología </strong><br> -- Ingenierías Eléctrica, Electrónica e Informática <br> -- Ingeniería de Sistemas y Comunicaciones',
        par_evaluador: "",
      },
    ],
    Buitrago: [
      {
        id: 5,
        nombre: "Bernabe Buitrago Dominguez",
        ruta: "./img/docentes/iconopersonaM.jpg",
        nombre_citaciones:
          '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br>BUITRAGO DOMINGUEZ, BERNABE',
        nacionalidad:
          '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
        formacion:
          '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> <strong style="color: black; font-size: 16px">Maestría/Magister</strong> UNIVERSIDAD TECNOLÓGICA DE PEREIRA - MAESTRIA EN INVESTIGACION OPERATIVA Y ESTADISTICA <br> <strong style="color: black; font-size: 16px">Especialización</strong> FUNDACIÓN UNIVERSITARIA LOS LIBERTADORES - ESPECIALIZACION EN ESTADISTICA APLICADA <br> <strong style="color: black; font-size: 16px">Pregrado/Universitario</strong> UNIVERSIDAD DE CUNDINAMARCA - Licenciatura en matemáticas',
        areas_actuacion:
          '<strong style="color: black; font-size: 18px">🕵️ Áreas de actuación: </strong> <br> <strong style="color: black; font-size: 16px">1. Ciencias Naturales </strong> <br> -- Matemática <br> -- Estadísticas y Probabilidades (Investigación en Metodologías)',
        par_evaluador:
          '<strong style="color: black; font-size: 18px"> Par evaluador: </strong> <br> <strong style="color: black; font-size: 16px"> 1. Ámbito: Nacional </strong> <br> -- Par evaluador de: No aplica <br> -- Proyecto Institución: Secretaria de educación del municipio de Fusagasugá,  2014,  Septiembre',
      },
    ],
    Eli: [
      {
        id: 6,
        nombre: "Campo Eli Castillo Eraso",
        ruta: "./img/docentes/CampoEli.jpg",
        nombre_citaciones:
          '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br> CASTILLO ERASO, CAMPO ELI',
        nacionalidad:
          '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
        formacion:
          '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> <strong style="color: black; font-size: 16px">Especialización</strong> CORPORACIÓN UNIVERSITARIA REMINGTON - Ciencias Básicas e Ingeniería <br> <strong style="color: black; font-size: 16px">Pregrado/Universitario</strong> Fundación Universidad Incca De Colombia - Ingeniería de Sistemas <br> <strong style="color: black; font-size: 16px">Secundaria</strong> - Instituto Champagnat <br> <strong style="color: black; font-size: 16px">Primaria</strong> - Instituto San Juan Bosco',
        areas_actuacion:
          '<strong style="color: black; font-size: 18px">🕵️ Áreas de actuación: </strong> <br> <strong style="color: black; font-size: 16px"> 1. Ingeniería y Tecnología </strong> <br> -- Ingenierías Eléctrica, Electrónica e Informática <br> -- Ingeniería de Sistemas y Comunicaciones',
        par_evaluador: "",
      },
    ],
    Peña: [
      {
        id: 7,
        nombre: "Edgar Alfonso Peña Albarracin",
        ruta: "./img/docentes/EdgarPeña.jpg",
        nombre_citaciones:
          '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br>PEÑA ALBARRACIN, EDGAR ALFONSO',
        nacionalidad:
          '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
        formacion:
          '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> <strong style="color: black; font-size: 16px">Maestría/Magister</strong> CORPORACIÓN UNIVERSITARIA MINUTO DE DIOS (UNIMINUTO) - MAESTRÍA EN EDUCACIÓN <br> <strong style="color: black; font-size: 16px">Pregrado/Universitario</strong> CORPORACIÓN UNIVERSITARIA MINUTO DE DIOS (UNIMINUTO) - LICENCIATURA EN INFORMATICA <br> <strong style="color: black; font-size: 16px">Técnico/nivel superior</strong> CORPORACIÓN UNIVERSITARIA MINUTO DE DIOS (UNIMINUTO) - TECNOLOGIA EN INFORMATICA <br> <strong style="color: black; font-size: 16px">Secundaria</strong> - Inem Francisco De Paula Santander Kennedy',
        areas_actuacion:
          '<strong style="color: black; font-size: 18px">🕵️ Áreas de actuación: </strong> <br> <strong style="color: black; font-size: 16px"> 1. Ciencias Sociales </strong> <br> -- Ciencias de la Educación <br> -- Educación General (Incluye Capacitación, Pedagogía) <br> <strong style="color: black; font-size: 16px"> 2. Ingeniería y Tecnología </strong> <br> -- Ingenierías Eléctrica, Electrónica e Informática <br> -- Hardware y Arquitectura de Computadores <br> -- Telecomunicaciones <br> -- Robótica y Control Automático <br> -- Ingeniería de Sistemas y Comunicaciones',
        par_evaluador:
          '<strong style="color: black; font-size: 18px"> Par evaluador: </strong> <br> <strong style="color: black; font-size: 16px"> 1. Ámbito: Nacional </strong> <br> -- Par evaluador de: No aplica <br> -- Material para publicación revista científica: Revista Perspectivas De La Investigación, 2024, Junio',
      },
    ],
    Vargas: [
      {
        id: 8,
        nombre: "Edna Alexandra Vargas Clavijo",
        ruta: "./img/docentes/EdnaVargas.jpg",
        nombre_citaciones:
          '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br> VARGAS CLAVIJO, EDNA ALEXANDRA',
        nacionalidad:
          '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
        formacion:
          '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> <strong style="color: black; font-size: 16px">Especialización</strong> UNIVERSIDAD DISTRITAL FRANCISCO JOSÉ DE CALDAS - Gerencia de Proyectos Educativos Institucionales <br> <strong style="color: black; font-size: 16px">Pregrado/Universitario</strong> UNIVERSIDAD DISTRITAL FRANCISCO JOSÉ DE CALDAS - Licenciatura en Matemáticas',
        areas_actuacion:
          '<strong style="color: black; font-size: 18px">🕵️ Áreas de actuación: </strong> <br> <strong style="color: black; font-size: 16px"> 1. Ciencias Sociales </strong> <br> -- Ciencias de la Educación <br> -- Educación General (Incluye Capacitación, Pedagogía)',
        par_evaluador: "",
      },
    ],
    Vasquez: [
      {
        id: 9,
        nombre: "Eva Patricia Vasquez Gomez",
        ruta: "./img/docentes/EvaVasquez.jpg",
        nombre_citaciones:
          '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br>VASQUEZ GOMEZ, EVA PATRICIA',
        nacionalidad:
          '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
        formacion:
          '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> <strong style="color: black; font-size: 16px">Maestría/Magister</strong> Universitat Oberta de Catalunya - Educación y TIC (e-learning) <br> <strong style="color: black; font-size: 16px">Especialización</strong> Escuela de Comunicaciones Militares - Gerencia Integral en Telecomunicaciones <br> <strong style="color: black; font-size: 16px">Pregrado/Universitario</strong> Fundación Universidad Incca De Colombia - Ingeniería de Sistemas',
        areas_actuacion:
          '<strong style="color: black; font-size: 18px">🕵️ Áreas de actuación: </strong> <br> <strong style="color: black; font-size: 16px"> 1. Ciencias Sociales </strong> <br> -- Ciencias de la Educación <br> -- Educación General (Incluye Capacitación, Pedagogía)',
        par_evaluador: "",
      },
    ],
    Lanza: [
      {
        id: 10,
        nombre: "Gustavo Adolfo Lanza Bayona",
        ruta: "./img/docentes/iconopersonaM.jpg",
        nombre_citaciones:
          '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br> LANZA BAYONA, GUSTAVO ADOLFO',
        nacionalidad:
          '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
        formacion:
          '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> <strong style="color: black; font-size: 16px">Doctorado</strong> UNIVERSIDAD DE LOS ANDES - Ingeniería <br> <strong style="color: black; font-size: 16px">Maestría/Magister</strong> Pontifícia Universidade Católica Do Rio De Janeiro - Mestrado em Física <br> <strong style="color: black; font-size: 16px">Pregrado/Universitario</strong> UNIVERSIDAD DE CUNDINAMARCA - Licenciatura en Física',
        areas_actuacion:
          '<strong style="color: black; font-size: 18px">🕵️ Áreas de actuación: </strong> <br> <strong style="color: black; font-size: 16px"> 1. Ciencias Naturales - Ciencias Físicas </strong> <br> -- Física de la Materia <br> <strong style="color: black; font-size: 16px"> 2. Ingeniería y Tecnología </strong> <br> -- Nanotecnología <br> -- Nanomateriales (Producción y Propiedades) <br> -- Nanoprocesos (Aplicaciones a Nanoescala)',
        par_evaluador: "",
      },
    ],
    Moreno: [
      {
        id: 11,
        nombre: "Jimmy Efren Moreno Sandoval",
        ruta: "./img/docentes/JimmyMoreno.jpg",
        nombre_citaciones:
          '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br> MORENO SANDOVAL, JIMMY EFREN',
        nacionalidad:
          '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
        formacion:
          '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> <strong style="color: black; font-size: 16px">Maestría/Magister</strong> Universidad Internacional de la Rioja - Master en Tecnología Educativa y Competencias Digitales <br> <strong style="color: black; font-size: 16px">Especialización</strong> UNIVERSIDAD DE CUNDINAMARCA FGGA - Gerencia para el Desarrollo Organizacional <br> <strong style="color: black; font-size: 16px">Pregrado/Universitario</strong> UNIVERSIDAD DE CUNDINAMARCA FGGA - Ingeniería Electrónica',
        areas_actuacion:
          '<strong style="color: black; font-size: 18px">🕵️ Áreas de actuación: </strong> <br> <strong style="color: black; font-size: 16px">1. Ingeniería y Tecnología </strong> <br> -- Ingenierías Eléctrica, Electrónica e Informática <br> -- Robótica y Control Automático <br> -- Ingeniería de Sistemas y Comunicaciones <br> -- Hardware y Arquitectura de Computadores <br> -- Automatización y Sistemas de Control <br> <strong style="color: black; font-size: 16px">2. Ciencias Sociales </strong> <br> -- Ciencias de la Educación <br> -- Educación General (Incluye Capacitación, Pedagogía) <br> -- Educación Especial (para Estudiantes Dotados y Aquellos con Dificultades del Aprendizaje)',
        par_evaluador: "",
      },
    ],
    Pardo: [
      {
        id: 12,
        nombre: "Jorge Rolando Pardo Morales",
        ruta: "./img/docentes/JorgePardo.jpg",
        nombre_citaciones:
          '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br>PARDO MORALES, JORGE ROLANDO',
        nacionalidad:
          '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
        formacion:
          '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> <strong style="color: black; font-size: 16px">Especialización</strong> INSTITUCIÓN UNIVERSITARIA POLITÉCNICO GRANCOLOMBIANO - Gerencia de Proyectos en Telecomunicaciones <br> <strong style="color: black; font-size: 16px">Pregrado/Universitario</strong> UNIVERSIDAD DE CUNDINAMARCA - Ingeniería de Sistemas',
        areas_actuacion:
          '<strong style="color: black; font-size: 18px">🕵️ Áreas de actuación: </strong> <br> <strong style="color: black; font-size: 16px"> 1. Ingeniería y Tecnología </strong> <br> -- Ingenierías Eléctrica, Electrónica e Informática <br> -- Ingeniería de Sistemas y Comunicaciones <br> -- Telecomunicaciones <br> -- Hardware y Arquitectura de Computadores <br> -- Otras Ingenierías y Tecnologías <br> <strong style="color: black; font-size: 16px"> 2. Ciencias Sociales </strong> <br> -- Economía y Negocios <br> -- Negocios y Management <br> -- Ciencias de la Educación <br> -- Educación General (Incluye Capacitación, Pedagogía) <br> -- Otras Ciencias Sociales <br> <strong style="color: black; font-size: 16px"> 3. Humanidades </strong> <br> -- Idiomas y Literatura <br> -- Arte <br> -- Diseño',
        par_evaluador: "",
      },
    ],
    Sotelo: [
      {
        id: 13,
        nombre: "Jose Fernando Sotelo Cubillos",
        ruta: "./img/docentes/iconopersonaM.jpg",
        nombre_citaciones:
          '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br> SOTELO CUBILLOS, JOSE FERNANDO',
        nacionalidad:
          '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
        formacion:
          '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> <strong style="color: black; font-size: 16px">Maestría/Magister</strong> Universidat Oberta De Catalunya - Maestría en Software Libre <br> <strong style="color: black; font-size: 16px">Especialización</strong> Universidad Antonio Nariño (U.A.N) Sede Bogotá - Administración de Empresas <br> <strong style="color: black; font-size: 16px">Pregrado/Universitario</strong> Universidad Autónoma De Colombia - Ingeniería de sistemas',
        areas_actuacion:
          '<strong style="color: black; font-size: 18px">🕵️ Áreas de actuación: </strong> <br> <strong style="color: black; font-size: 16px"> 1. Ingeniería y Tecnología </strong> <br> -- Ingenierías Eléctrica, Electrónica e Informática <br> -- Ingeniería de Sistemas y Comunicaciones',
        par_evaluador: "",
      },
    ],
    Lozano: [
      {
        id: 14,
        nombre: "Juan Jairo Lozano Carvajal",
        ruta: "./img/docentes/JuanLozano.jpg",
        nombre_citaciones:
          '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br> PARDO MORALES, JORGE ROLANDO',
        nacionalidad:
          '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
        formacion:
          '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> <strong style="color: black; font-size: 16px"> Maestría/Magister </strong> UNIVERSIDAD DEL TOLIMA - Maestría en Educación <br> </strong> <strong style="color: black; font-size: 16px"> Especialización </strong> Corporación Universidad Piloto De Colombia sede Girardot - GERENCIA DE PROYECTOS <br> </strong><strong style="color: black; font-size: 16px"> Pregrado/Universitario </strong> Corporación Universidad Piloto De Colombia sede Girardot - Ingeniería de sistemas',
        areas_actuacion:
          '<strong style="color: black; font-size: 18px">🕵️ Áreas de actuación: </strong> <br> <strong style="color: black; font-size: 16px"> 1. Ingeniería y Tecnología </strong> <br> -- Ingenierías Eléctrica, Electrónica e Informática <br> -- Ingeniería de Sistemas y Comunicaciones <br> -- Telecomunicaciones <br> -- Hardware y Arquitectura de Computadores <br> -- Otras Ingenierías y Tecnologías <br> <strong style="color: black; font-size: 16px"> 2. Ciencias Sociales </strong> <br> -- Ciencias de la Educación <br> -- Educación General (Incluye Capacitación, Pedagogía)',
        par_evaluador: "",
      },
    ],
    Veloza: [
      {
        id: 15,
        nombre: "Juanita Alexandra Veloza Vargas",
        ruta: "./img/docentes/JuanitaVeloza.jpg",
        nombre_citaciones:
          '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br> VELOZA VARGAS, JUANITA ALEXANDRA',
        nacionalidad:
          '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
        formacion:
          '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> <strong style="color: black; font-size: 16px"> Maestría/Magister </strong>UNIVERSIDAD DE CUNDINAMARCA - MAESTRÍA EN EDUCACIÓN <br> <strong style="color: black; font-size: 16px"> Pregrado/Universitario </strong> UNIVERSIDAD DE CUNDINAMARCA <br> <strong style="color: black; font-size: 16px"> Secundaria </strong> - Colegio Diocesano Ricaurte',
        areas_actuacion:
          '<strong style="color: black; font-size: 18px">🕵 Áreas de actuación: </strong> <br> <strong style="color: black; font-size: 16px"> 1. Ciencias Naturales </strong> <br> -- Matemática <br> -- Matemáticas Aplicadas',
        par_evaluador: "",
      },
    ],
    Infante: [
      {
        id: 16,
        nombre: "Kelly johana  Infante Beltrán",
        ruta: "./img/docentes/iconopersonaF.jpg",
        nombre_citaciones:
          '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br> kinfante',
        nacionalidad:
          '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
        formacion:
          '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> <strong style="color: black; font-size: 16px"> Maestría/Magister </strong>UNIVERSIDAD DE CUNDINAMARCA - MAESTRÍA EN EDUCACIÓN <br> <strong style="color: black; font-size: 16px"> Pregrado/Universitario </strong> UNIVERSIDAD DE CUNDINAMARCA FGGA - Licencitura en Mateméticas <br> <strong style="color: black; font-size: 16px"> Perfeccionamiento  </strong> UNIVERSIDAD DE CUNDINAMARCA FGGA - DIPLOMADO EN ESTRATEGÍAS COMUNICATIVAS <br> <strong style="color: black; font-size: 16px"> Perfeccionamiento  </strong> Fundación Reeducativa PROFUTURO - NEURODIDÁCTICA<br> <strong style="color: black; font-size: 16px"> Perfeccionamiento  </strong> SENA CENTRO AGROECOLÓGICO Y EMPRESARIAL FUSAGASUGÁ - SOLUCIÓN DE PROBLEMAS DE AMBIENTES DE APRENDIZAJE GRADO 9 <br> <strong style="color: black; font-size: 16px"> Técnico - nivel medio </strong> Servicio Nacional De Aprendizaje Sena-Fusagasuga - TÉCNICO EN VENTAS DE PRODUCTOS Y SERVICIOS <br> <strong style="color: black; font-size: 16px"> Técnico - nivel medio </strong>  INSATITUCION EDUCATIVA TECNICA MUNICIPAL TEODORO AYA VILLAVECES - GESTION EMPRESARIAL <br> <strong style="color: black; font-size: 16px"> Secundaria </strong> INSATITUCION EDUCATIVA TECNICA MUNICIPAL TEODORO AYA VILLAVECES <br>',
        areas_actuacion:
          '<strong style="color: black; font-size: 18px">🕵 Áreas de actuación: </strong> <br> <strong style="color: black; font-size: 16px"> 1. Ciencias Sociales </strong> <br> -- Ciencias de la Educación <br> -- Educación General (Incluye Capacitación, Pedagogía) <br> -- Educación Especial (para Estudiantes Dotados y Aquellos con Dificultades del Aprendizaje)',
        par_evaluador: "",
      },
    ],
    Garzon: [
      {
        id: 17,
        nombre: "Luis Carlos Garzón Bedoya",
        ruta: "./img/docentes/LuisGarzon.jpg",
        nombre_citaciones:
          '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br> GARZÓN BEDOYA, LUIS CARLOS',
        nacionalidad:
          '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
        formacion:
          '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> <strong style="color: black; font-size: 16px"> Maestría/Magister </strong>Universidad Internacional de la Rioja UNIR - Máster en Diseño y Gestión de Proyectos Tecnológicos<br> <strong style="color: black; font-size: 16px"> Pregrado/Universitario </strong> Corporación Universidad Piloto De Colombia - Sede Girardot',
        areas_actuacion:
          '<strong style="color: black; font-size: 18px">🕵 Áreas de actuación: </strong> <br> No presenta',
        par_evaluador: "",
      },
    ],
    Pulido: [
      {
        id: 18,
        nombre: "Marcia Catalina Pulido Córdoba",
        ruta: "./img/docentes/MarciaPulido.jpg",
        nombre_citaciones:
          '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br> PULIDO CÓRDOBA, MARCIA CATALINA',
        nacionalidad:
          '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
        formacion:
          '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> <strong style="color: black; font-size: 16px"> Maestría/Magister</strong> Universidad Oberta de Cataluña - Master en Telemedicina <br> <strong style="color: black; font-size: 16px"> Especialización </strong> UNIVERSIDAD DE CUNDINAMARCA - Gerencia en Servicios de Salud <br> <strong style="color: black; font-size: 16px"> Pregrado/Universitario </strong> UNIVERSIDAD DE CUNDINAMARCA - Ingeniería de Sistemas',
        areas_actuacion:
          '<strong style="color: black; font-size: 18px">🕵 Áreas de actuación: </strong> <br> <strong style="color: black; font-size: 16px">1. Ingeniería y Tecnología </strong> <br> -- Ingenierías Eléctrica, Electrónica e Informática <br> -- Ingeniería de Sistemas y Comunicaciones <br> -- Otras Ingenierías y Tecnologías',
        par_evaluador: "",
      },
    ],
    Rozo: [
      {
        id: 19,
        nombre: "Rosalba rozo caballero",
        ruta: "./img/docentes/RosalbaRozo.jpg",
        nombre_citaciones:
          '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br> ROZO CABALLERO, ROSALBA',
        nacionalidad:
          '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
        formacion:
          '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> <strong style="color: black; font-size: 16px"> Especialización </strong> UNIVERSIDAD NACIONAL ABIERTA Y A DISTANCIA - Ingeniería de sistemas <br> <strong style="color: black; font-size: 16px"> Pregrado/Universitario </strong> UNIVERSIDAD NACIONAL ABIERTA Y A DISTANCIA - Ingeniería de sistemas',
        areas_actuacion:
          '<strong style="color: black; font-size: 18px">🕵 Áreas de actuación: </strong> <br> <strong style="color: black; font-size: 16px">1. Ingeniería y Tecnología </strong> <br> -- Ingenierías Eléctrica, Electrónica e Informática <br> -- Hardware y Arquitectura de Computadores <br> -- Otras Ingenierías y Tecnologías',
        par_evaluador: "",
      },
    ],
    Pachon: [
      {
        id: 20,
        nombre: "SANDRA MILENA PACHON URREGO",
        ruta: "./img/docentes/SandraPachon.jpg",
        nombre_citaciones:
          '<strong style="color: black; font-size: 18px">✍🏻 Nombre en citaciones:</strong> <br> PACHON URREGO, SANDRA MILENA',
        nacionalidad:
          '<strong style="color: black; font-size: 18px">🌎 Nacionalidad:</strong> <br> Colombiana',
        formacion:
          '<strong style="color: black; font-size: 18px">🎖️ Formación académica: </strong> <br> <strong style="color: black; font-size: 16px"> Maestría/Magister</strong> UNIVERSIDAD IBEROAMERICANA INTERNACIONAL UNINI - Desarrollo estratégico <br> <strong style="color: black; font-size: 16px"> Pregrado/Universitario </strong> UNIVERSIDAD DE CUNDINAMARCA FGGA - Ingenieria de Sistemas',
        areas_actuacion:
          '<strong style="color: black; font-size: 18px">🕵️ Áreas de actuación: </strong> <br> No presenta',
        par_evaluador: "",
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
