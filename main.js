// Una clase que tome los nombres, el curso y la nota de un alumno
class Alumno {
	constructor(nombre, curso, nota) {
		this.nombre = nombre.toUpperCase();
		this.curso = parseFloat(curso);
		this.nota = parseFloat(nota);
	}

	mostrarSituacion() {
		if (this.nota >= 6) {
			console.log(
				'El alumno ' +
					this.nombre +
					' se encuentra en el curso N°' +
					this.curso +
					'. El alumno está aprobado con una nota de ' +
					this.nota +
					'.'
			);
		} else {
			console.log(
				'El alumno ' +
					this.nombre +
					' se encuentra en el curso N°' +
					this.curso +
					'. El alumno está desaprobado con una nota de ' +
					this.nota +
					'.'
			);
		}
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
function aniadirEstudiante() {
	let nombre = prompt('Ingresa el nombre del estudiante:');
	let curso = prompt('Ingresa el curso del estudiante:');
	let nota = prompt('Ingresa la nota del estudiante:');

	nota = parseFloat(nota);
	if (nota > 0 && nota <= 10) {
		let alumnoNuevo = new Alumnos(nombre, curso, nota);
		listaAlumnos.push(alumnoNuevo);
	} else {
		console.log(
			'Debes ingresar un valor numérico mayor que 0 y menor o igual a 10 para que la nota sea válida.'
		);
	}
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
			<h1><strong>${alumno.nombre}</strong></h1>
			<h3><strong>Curso: </strong>${alumno.curso}</h3>
			<h4><strong>Nota: </strong>${alumno.nota}</h4>
		`;
		contenedor.appendChild(div);
	});
}

// Función para filtrar los alumnos por curso
function filtrarAlumnos() {
	const cursoSeleccionado = document.getElementById('filtro-curso').value;
	let alumnosFiltrados = [];

	if (cursoSeleccionado === 'todos') {
		alumnosFiltrados = listaAlumnos;
	} else {
		for (let alumno of listaAlumnos) {
			if (alumno.curso.toString() === cursoSeleccionado) {
				alumnosFiltrados.push(alumno);
			}
		}
	}

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

// Inicializar la lista de alumnos
mostrarAlumnos();

// FIN DE LAS FUNCIONES

//Playground

// buscarAlumnos(prompt('')); //

// Mostrar la situacion academica de un alumno:
// listaAlumnos[2].mostrarSituacion();

//Un filter para sacar solamente a los alumnos del curso N° 1:
const cursoUno = listaAlumnos.filter((el) => el.curso == 1);
//console.log(cursoUno);

const aprobados = listaAlumnos.filter((el) => el.nota >= 6); //Alumnos aprobados
// console.log(aprobados);

// anadirEstudiante();

// console.log(listaAlumnos);

mostrarAlumnos();
