const registrarNombres = (cantidadAlumnos) =>{
    let alumnos = {};
    for (let i = 0; i< cantidadAlumnos; i++){
    let nombre = prompt("Ingresa el nombre del alumno");
    alumnos[nombre] = 0
}
return alumnos;
}

const inasistenciasAlumnos = (diccionarioAlumnos, cantidadDias) =>{

    while (cantidadDias > 0){
        for (alumno in diccionarioAlumnos){
            let respuesta  = prompt(`El estudiante ${alumno} faltó? Marque  (P) o (A) `);
            if (alumno && respuesta.toUpperCase() == "A"){
                diccionarioAlumnos[alumno] += 1
            }
            else{
                continue
            }
        }
    cantidadDias-=1
    }
    return diccionarioAlumnos
}


const perdieronMateria = (diccionarioAlumnos, cantidadDias) =>{
    for (alumno in diccionarioAlumnos){
        if (alumno && diccionarioAlumnos[alumno] > cantidadDias*0.1){
            document.write(`<b>${alumno} pasó la materia con ${diccionarioAlumnos[alumno]} AUSENCIAS y ${cantidadDias-diccionarioAlumnos[alumno]} PRESENTES</b> </br>`)
        }
        else{
            document.write(`<b style = 'color:red'>${alumno} Perdió la materia con ${diccionarioAlumnos[alumno]} FALTAS y ${cantidadDias-diccionarioAlumnos[alumno]} PRESENTES </b>`)
        }
    }
}


let cantidadAlumnos = parseInt(prompt("Ingresa la cantidad de alumnos: "));
let cantidadDias = parseInt(prompt("Ingresa la cantidad de dias a registrar: "));
let estudiantes = registrarNombres(cantidadAlumnos);
let inasistencias = inasistenciasAlumnos(estudiantes, cantidadDias);

perdieronMateria(inasistencias, cantidadDias);
