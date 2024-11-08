function calcular() {
    // Obtener los valores de los inputs y del select
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const operacion = document.getElementById("operacion").value;
    let resultado;

    // Realizar la operación seleccionada
    switch (operacion) {
        case "sumar":
            resultado = numero1 + numero2;
            break;
        case "restar":
            resultado = numero1 - numero2;
            break;
        case "multiplicar":
            resultado = numero1 * numero2;
            break;
        case "dividir":
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
            } else {
                resultado = "Error: División por cero";
            }
            break;
        default:
            resultado = "Operación no válida";
            break;
    }

    // Mostrar el resultado en el span con id "resultado"
    document.getElementById("resultado").textContent = resultado;
}
