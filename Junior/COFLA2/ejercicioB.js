const esMayorEdad = (nombre, edad) =>{
    if (edad >= 18){
        // document.write(`${nombre} Puede pasar. Tiene ${edad}`)
        return true
    }
    else{
        // document.write(`${nombre} es menor  de edad. No puede ingresar`)
        return false
    }
}

const maquinaMayoresEdad = (nombre, edad, horaIngreso) =>{
    if (esMayorEdad(nombre, edad) && horaIngreso  > 2){
        document.write(`${nombre} no pagas. Entraste a las ${horaIngreso}. Es más de las 2am`)
    }
    else if (esMayorEdad(nombre, edad) == false){
        document.write(`${nombre}Eres menor de edad. No  puedes ingresar: ${edad}`)
    }
    else{
        document.write(`${nombre} Debes pagar la entrada. Eres mayor de edad: ${edad} y llegaste a las ${horaIngreso}`)
    }
}

maquinaMayoresEdad("Juan", 18, 3)