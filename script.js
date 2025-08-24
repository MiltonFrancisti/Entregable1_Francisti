// ----------------------------
// SIMULADOR DE AHORRO MENSUAL
// ----------------------------

// Variables y constantes
const nombreUsuario = prompt("Bienvenido/a al simulador de ahorro.\n\n¿Cuál es tu nombre?");
let ingresosMensuales = 0;
let gastosMensuales = 0;
let mesesAhorro = 0;

// Función 1: pedir datos
function solicitarDatos() {
    ingresosMensuales = parseFloat(prompt("¿Cuánto dinero ganas por mes, " + nombreUsuario + "?"));
    gastosMensuales = parseFloat(prompt("¿Cuánto dinero gastas por mes?"));
    mesesAhorro = parseInt(prompt("¿Durante cuántos meses deseas ahorrar?"));
}

// Función 2: calcular ahorro
function calcularAhorro(ingreso, gasto, meses) {
    const ahorroMensual = ingreso - gasto;

    if (ahorroMensual <= 0) {
        alert("Atención: No tienes capacidad de ahorro, tus gastos son mayores o iguales a tus ingresos.");
        return 0;
    } else {
        const total = ahorroMensual * meses;
        return total;
    }
}

// Función 3: mostrar resultado
function mostrarResultado(total) {
    if (total > 0) {
        alert(nombreUsuario + ", en " + mesesAhorro + " meses podrás ahorrar: $" + total.toFixed(2));
        console.log("Detalle del ahorro:");
        for (let i = 1; i <= mesesAhorro; i++) {
            console.log("Mes " + i + ": $" + ((ingresosMensuales - gastosMensuales) * i).toFixed(2));
        }
    }
}

// Función extra: Confirmación para iniciar
function iniciarSimulador() {
    let continuar = confirm("¿Deseas comenzar con el simulador de ahorro?");
    if (continuar) {
        solicitarDatos();
        const ahorroTotal = calcularAhorro(ingresosMensuales, gastosMensuales, mesesAhorro);
        mostrarResultado(ahorroTotal);
    } else {
        alert("¡Gracias por visitar el simulador!");
    }
}

// Ejecutar simulador
iniciarSimulador();
