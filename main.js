// Una clase que tome los nombres, el curso y la nota de un alumno
class Alumnos {
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
//Lista de alumnos
let listaAlumnos = [
	new Alumnos('Miguel Perez', 2, 9),
	new Alumnos('Alberto Diaz', 3, 6),
	new Alumnos('Sebastian Orrego', 3, 3),
	new Alumnos('Cintia Fernandez', 1, 1),
	new Alumnos('Diamela Gutierrez', 1, 7),
	new Alumnos('Maria Ruiz', 2, 2),
];

//Una funcion que permite añadir un alumno
function anadirEstudiante() {
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
}

listaAlumnos[2].mostrarSituacion(); // Mostrar la situacion academica de un alumno.

const cursoUno = listaAlumnos.filter((el) => el.curso == 1); //Un filter para sacar solamente a los alumnos del curso N° 1.
// console.log(cursoUno);

const aprobados = listaAlumnos.filter((el) => el.nota >= 6); //Alumnos aprobados
// console.log(aprobados);

anadirEstudiante();
console.log(listaAlumnos);
