function convertToCelsius() {
    var celsiusInput = document.getElementById("celsius");
    var resultOutput = document.getElementById("result");
    
    if (celsiusInput.value === "") {
        resultOutput.textContent = "Please enter a value.";
        return;
    }

    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9/5) + 32;
    
    resultOutput.textContent = celsius + "°C is equal to " + fahrenheit.toFixed(2) + "°F";
}
