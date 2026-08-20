function esAnagrama(palabra1, palabra2) {
    const limpiar = (palabra) => {
        return palabra
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s/g, "");
    };

    const letras1 = limpiar(palabra1).split("").sort().join("");
    const letras2 = limpiar(palabra2).split("").sort().join("");

    return letras1 === letras2;
}


console.log(esAnagrama("Árbol", "Bólar"));
console.log(esAnagrama("Roma", "Amor"));
console.log(esAnagrama("Hola mundo", "Mundo hola"));
console.log(esAnagrama("café", "feca"));
console.log(esAnagrama("Hola", "Adiós"));