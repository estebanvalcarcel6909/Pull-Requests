let primos = [];

for (let numero = 2; numero <= 50; numero++) {

    let esPrimo = true;

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        primos.push(numero);
    }
}

console.log(primos);