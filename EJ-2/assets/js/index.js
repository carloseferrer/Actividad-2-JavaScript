validarYCalcularInteres = () => {
    var montoInicialInput = document.getElementById("montoInicial");
    var montoInicial = parseFloat(montoInicialInput.value);

    if (isNaN(montoInicial) || montoInicial <= 0) {
        alert("Ingrese un monto inicial valido por favor!");
        montoInicialInput.value = "";
        montoInicialInput.focus();
        return;
    }

    var aporteMensual = 250;
    var tasaInteresMensual = 0.0125;
    var meses = 12;
    var montoAcumulado = 0;

    // Calcular el interés acumulado y el saldo total
    var interesAcumulado = 0;

    for (var i = 0; i < meses; i++) {
        // Sumar el aporte mensual al monto acumulado
        montoInicial += aporteMensual;
       
        // Calcular el interés mensual
        var interesMensual = montoInicial * tasaInteresMensual;
        interesAcumulado += interesMensual;

        // Sumar el interés mensual al monto acumulado
        montoInicial += interesMensual;
    }

    // Mostrar el resultado
    document.getElementById("resultado").innerHTML =
    `
    El interés a final de año es de: ${interesAcumulado.toFixed(2)} Bs<br><br/>
    El monto total a final de año es de: ${montoInicial.toFixed(2)} Bs<br><br/>
    `;

    // Mostrar el botón de reiniciar
    document.getElementById("reiniciarBtn").style.display = "block";
}

reiniciarPagina = () => {
    location.reload();
}
