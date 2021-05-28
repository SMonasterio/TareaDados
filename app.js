//Dados

/*Escribir un script que simule el lanzamiento de dos dados. 
Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 
para cada uno de los lanzamientos de los dados. 
Sumar el resultado de lanzar dos dados 
y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.*/

resultados=[]
contador=1

function lanzamientoDados() {
 
    while (contador <= 50) {
        
    if (true) {
        let dado1 = Math.ceil(Math.random() * 6);
        console.log(`Resultado dado 1: ${dado1}`);
        let dado2 = Math.ceil(Math.random() * 6);
        console.log(`Resultado dado 2: ${dado2}`);
        let suma = dado1 + dado2;
        
        console.log(`La suma de los dos dados es: ` + suma);
        resultados.push(suma);
        
    }
      contador++;
        
    }    
}

