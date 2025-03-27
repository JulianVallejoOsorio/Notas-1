let intentos = 0;
let login = false;

while (intentos < 3) {
    let usuario = prompt("Ingrese su usuario:");
    let contraseña = prompt("Ingrese su contraseña:");

    if (usuario == "Admin" && contraseña === "123") {
        console.log("Acceso concedido. Bienvenido!");
        login = true;
        break;
    } else {
        intentos++
        console.log("Usuario y/o contraseña incorrectos");
    }
}

if (!login) {
    console.log("Demasiados intentos fallidos, intentelo mas tarde.");
} else {
    const carreras = {
        "1": { nombre: "Desarrollo de Software", materias: ["Front", "Back", "DevOps"] },
        "2": { nombre: "Administración", materias: ["Contabilidad", "Gestión", "Ofimática"] },
        "3": { nombre: "Contabilidad", materias: ["Contabilidad", "Nómina", "Legislación"] }
    };

    let opcion = prompt("Seleccione el programa:\n1. Desarrollo de Software\n2. Administración\n3. Contabilidad");
    let programa = carreras[opcion];

    if (programa) {
        console.log(`Programa seleccionado: ${programa.nombre}`);
        let aprobados = {};

        for (let materia of programa.materias) {
            console.log(`  Materia: ${materia}`);
            let totalEstudiantes = parseInt(prompt(`Ingrese la cantidad de estudiantes en ${materia}: `));
            aprobados[materia] = 0;

            for (let i = 0; i < totalEstudiantes; i++) {
                let estudiante = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
                console.log(`Estudiante: ${estudiante}`);
                let notaFinal = 0;

                for (let momento = 1; momento <= 3; momento++) {
                    console.log(`Momento ${momento}:`);
                    let momentoTotal = 0;

                    for (let nota = 1; nota <= 3; nota++) {
                        let valor = parseFloat(prompt(`Ingrese nota ${nota}: `));
                        console.log(`        Nota ${nota}: ${valor}`);
                        switch (nota) {
                            case 1:
                            case 2:
                                momentoTotal += valor * 0.2;
                                break;
                            case 3:
                                momentoTotal += valor * 0.6;
                                break;
                        }
                    }
                    console.log(`Nota final del Momento ${momento}: ${momentoTotal.toFixed(2)}`);

                    switch (momento) {
                        case 1:
                        case 2:
                            notaFinal += momentoTotal * 0.2;
                            break;
                        case 3:
                            notaFinal += momentoTotal * 0.6;
                            break;
                    }
                }

                console.log(`Nota final de ${estudiante}: ${notaFinal.toFixed(2)}`);
                if (notaFinal >= 3.0) {
                    console.log(`${estudiante} APROBADO`);
                    aprobados[materia]++;
                } else {
                    console.log(`${estudiante} REPROBADO`);
                }
            }
        }

        console.log(`Resultados en ${programa.nombre}:`);
        for (let materia of programa.materias) {
            console.log(`  Materia ${materia}: ${aprobados[materia]} estudiantes aprobados`);
        }
    } else {
        console.log("Opción inválida.");
    }
}
