function esPalindromo(cadena) {
    let texto = cadena.replace(/\s/g, "").toLowerCase();
    let invertido = texto.split("").reverse().join("");

    return texto === invertido;
}

// Pruebas
console.log(esPalindromo("Anita lava la tina")); 
console.log(esPalindromo("Hola mundo")); 
console.log(esPalindromo("Reconocer")); 