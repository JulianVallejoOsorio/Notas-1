// Inicio de sesion
let attempts = 0;
let login = false;
while (attempts < 3) {
    let user = prompt("Ingrese su usuario: ");
    let password = parseInt(prompt("Ingrese su contraseña: "));
    if (user === "Admin" && password === 1234) {
        alert("Bienvenido");
        login = true;
        break;
    } else {
        alert("Usuario incorrecto, intente de nuevo");
        attempts++;
    }
}

// Menu
let estudiantes = [];

let option = parseInt(prompt("Seleccione: \n1 - Registrar un estudiante\n2 - Retirar dinero\n3 - Consignar dinero (Cuenta propia)\n4 - Transferir dinero otras cuentas\n5 - Salir"))

switch (option) {
    case value:
        
        break;

    default:
        break;
}


