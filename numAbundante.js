function esAbundante(num) {
    let numAbundante = 0;

    for(let i = 0; i < num; i++) {
        if(num % i == 0) numAbundante += i;
    }

    if(numAbundante > num) return true;
}

const numero = prompt("Digitar un numero: ");

if(esAbundante(numero)) document.write("El numero " + numero + " es abundante");
else document.write("El numero " + numero + " NO es abundante");