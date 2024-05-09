// Una clase que tome los nombres, el curso y la nota de un alumno
class Alumno {
	constructor(nombre, curso, nota) {
		this.nombre = nombre.toUpperCase();
		this.curso = parseFloat(curso);
		this.nota = parseFloat(nota);
	}

	mostrarSituacion() {
		const estado = this.nota >= 6 ? 'aprobado' : 'desaprobado';
		console.log(
			`El alumno ${this.nombre} se encuentra en el curso N°${this.curso}. El alumno está ${estado} con una nota de ${this.nota}.`
		);
	}
}

//	LISTA DE LOS ALUMNOS
let listaAlumnos = [
	new Alumno('Miguel Perez', 2, 9),
	new Alumno('Alberto Diaz', 3, 6),
	new Alumno('Sebastian Orrego', 3, 3),
	new Alumno('Cintia Fernandez', 1, 1),
	new Alumno('Diamela Gutierrez', 1, 7),
	new Alumno('Maria Ruiz', 2, 2),
];

// FUNCIONES
function aniadirEstudiante(nombre, curso, nota) {
	nota = parseFloat(nota);
	if (!isNaN(nota) && nota > 0 && nota <= 10) {
		let alumnoNuevo = new Alumno(nombre, curso, nota); //Crea un nuevo objeto Alumno
		listaAlumnos.push(alumnoNuevo); //Pushea el Alumno creado al array de ListaAlumnos
		mostrarAlumnos(); //Actualiza el render de alumnos para mostrar el alumno agregado
	} else {
		alert(
			'Debes ingresar un valor numérico mayor que 0 y menor o igual a 10 para que la nota sea válida.'
		);
	}
	guardarAlumnosLS();
	//Una funcion que permite añadir un alumno
}

// Función para mostrar los alumnos
function mostrarAlumnos() {
	const contenedor = document.getElementById('contenedor-alumnos');
	contenedor.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevas tarjetas de los alumnos.

	listaAlumnos.forEach((alumno) => {
		const div = document.createElement('div');
		div.classList.add('tarjeta-alumno');
		div.innerHTML = `
			<h3><strong>${alumno.nombre}</strong></h1>
			<h4><strong>Curso: </strong>${alumno.curso}</h3>
			<h4><strong>Nota: </strong>${alumno.nota}</h4>
		`;
		contenedor.appendChild(div);
	});
}

// Función para filtrar los alumnos por curso
function filtrarAlumnos() {
	const cursoSeleccionado = document.getElementById('filtro-curso').value;
	let alumnosFiltrados =
		cursoSeleccionado === 'todos'
			? listaAlumnos
			: listaAlumnos.filter(
					(alumno) => alumno.curso.toString() === cursoSeleccionado
			  );
	mostrarAlumnosFiltrados(alumnosFiltrados);
}

function mostrarAlumnosFiltrados(alumnos) {
	const contenedor = document.getElementById('contenedor-alumnos');
	contenedor.innerHTML = '';

	alumnos.forEach((alumno) => {
		const div = document.createElement('div');
		div.classList.add('tarjeta-alumno');
		div.innerHTML = `
            <h1><strong>${alumno.nombre}</strong></h1>
            <h3><strong>Curso: </strong>${alumno.curso}</h3>
            <h4><strong>Nota: </strong>${alumno.nota}</h4>
        `;
		contenedor.appendChild(div);
	});
}
function restablecerFiltros() {
	document.getElementById('filtro-curso').value = 'todos';
	mostrarAlumnos();
}
function guardarAlumnosLS() {
	const json = JSON.stringify(listaAlumnos);
	localStorage.setItem('listaAlumnos', json);
}
function obtenerAlumnosLS() {
	const json = localStorage.getItem('listaAlumnos');
	if (json) {
		listaAlumnos = JSON.parse(json);
	}
	mostrarAlumnos(); // Corregido para llamar a la función
}

// Inicializar la lista de alumnos
obtenerAlumnosLS();

// FIN DE LAS FUNCIONES
const creadorDeEstudiantesForm = document.getElementById('form-alumno');

// Agrega un event listener para el evento 'submit'
creadorDeEstudiantesForm.addEventListener('submit', function (event) {
	event.preventDefault();

	// Obtén los valores ingresados por el usuario
	const nombre = document.getElementById('nombre').value;
	const curso = document.getElementById('curso').value;
	const nota = document.getElementById('nota').value;

	// Crea un nuevo alumno y añádelo a la lista
	aniadirEstudiante(nombre, curso, nota);
	mostrarAlumnos();
	creadorDeEstudiantesForm.reset();
});
