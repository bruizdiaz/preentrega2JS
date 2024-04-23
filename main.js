// Una clase que tome los nombres, el curso y la nota de un alumno
class Alumnos {
	constructor(nombre, curso, nota) {
		this.nombre = nombre.toUpperCase();
		this.curso = parseFloat(curso);
		this.nota = parseFloat(nota);
	}

	mostrarSituacion() {
		if (this.nota < 6) {
			console.log(
				'El alumno ' +
					this.nombre +
					' se encuentra en el curso N°' +
					this.curso +
					'. El alumno se encuentra aprobado con una nota de ' +
					this.nota +
					'.'
			);
		} else {
			console.log(
				'El alumno ' +
					this.nombre +
					' se encuentra en el curso N°' +
					this.curso +
					'. El alumno se encuentra desaprobado con una nota de ' +
					this.nota +
					'.'
			);
		}
	}
}
// Los alumnos
const perezMiguel = new Alumnos('Miguel Perez', 2, 9);
const diazAlberto = new Alumnos('Alberto Diaz', 3, 6);
const orregoSebastian = new Alumnos('Sebastian Orrego', 3, 3);
const fernandezCintia = new Alumnos('Cintia Fernandez', 1, 1);
const gutierrezDiamela = new Alumnos('Diamela Gutierrez', 1, 7);
const ruizMaria = new Alumnos('Maria Ruiz', 2, 2);

diazAlberto.mostrarSituacion(); // Mostrar la situacion academica de un alumno.

let listaAlumnos = [
	perezMiguel,
	diazAlberto,
	orregoSebastian,
	fernandezCintia,
	gutierrezDiamela,
	ruizMaria,
];

let alumnosNuevo = [];

const cursoUno = listaAlumnos.filter((el) => el.curso == 1); //Un filter para sacar solamente a los alumnos del curso N° 1.
console.log(cursoUno);
// const cursoDos = listaAlumnos.filter((el) => el.curso == 2); //Un filter para sacar solamente a los alumnos del curso N° 2.
// console.log(cursoDos);
// const cursoTres = listaAlumnos.filter((el) => el.curso == 3); //Un filter para sacar solamente a los alumnos del curso N° 3.
// console.log(cursoTres);

const aprobados = listaAlumnos.filter((el) => el.nota >= 6); //Alumnos aprobados
console.log(aprobados);

function anadirEstudiante(alumnosNuevo) {
	let nombre = prompt('Ingresa el nombre del estudiante:');
	let curso = prompt('Ingresa el curso del estudiante:');
	let nota = prompt('Ingresa la nota del estudiante:');

	if (!isNaN(nota) && nota > 0 && nota <= 10) {
		let nuevoEstudiante = new Alumnos(nombre, curso, nota);
		alumnosNuevo.push(nuevoEstudiante);
	} else {
		console.log(
			'Debes ingresar un valor numerico mayor que 0 y menor a 10 para que la nota sea valida.'
		);
	}
}
