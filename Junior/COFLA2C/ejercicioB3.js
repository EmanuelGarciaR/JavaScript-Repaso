const sumar = (listNumeros) =>{
    return listNumeros.reduce((total, valor)=>total+valor, 0);
}

const restar = (listNumeros) =>{
    return listNumeros.reduce((total, valor)=> total-valor);
}

const multiplicar = (listNumeros) =>{
    return listNumeros.reduce((total, numero) => total*numero);
}

const dividir = (listNumeros) =>{
    try {
        let a = listNumeros[0]
        let b = listNumeros[1]
        if (b == 0){
            throw new Error("No se puede dividir por 0");
        }

        if (typeof a != 'number' && typeof b != 'number'){
            throw new Error("No son valores  númericos");
        }
        return a/b
    } catch (error) {
        console.log(error);
        return `<b style="color: red;">${error.message}</b>`;
    }
}

let cantidadNumeros = parseInt(prompt("Ingresa la cantidad de numeros que quieres operar: "))
let numeros = []
        for (let i =0; i<cantidadNumeros; i++){
            let valor = parseInt(prompt(`Ingresa el valor, ${i}`))
            numeros.push(valor)
        }

let option = prompt("Ingresa S para sumar </br>Ingresa R para restar </br>Ingresa M para multiplicar </br>Ingresa D para dividir")
switch (option) {
    case "S":
        document.write(sumar(numeros))
        break;
    case "R":
        document.write(restar(numeros))
        break;
    case "M":
        document.write(restar(numeros))
        break;
    case "D":
        try {
            if  (cantidadNumeros > 2){
                throw new Error("Solo puedes ingresar 2 números")
            }
            else{
                document.write(dividir(numeros))
            }
        } catch (error) {
            document.write(error);
        }
        break;

    default:
        break;
}