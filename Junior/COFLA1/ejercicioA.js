let dineroCofla = prompt("Ingresa el dinero que tiene Cofla: ") 
let dineroRoberto = prompt("Ingresa el dinero que tiene Roberto: ") 
let dineroPedro = prompt("Ingresa el dinero que tiene Pedro: ") 

// Cofla
if (dineroCofla <= 0){
    console.log("No puedes pagar ningún helado COFLA")
}

if (dineroCofla >= 0.6 && dineroCofla <1){
    console.log("Puedes comprar el helado de agua - COFLA")
}
else if (dineroCofla >=1 && dineroCofla <1.6){
    console.log("Puedes comprar el helado de crema - COFLA")
}
else if (dineroCofla >=1.6 && dineroCofla <1.7){
    console.log("Puedes comprar el helado de Heladix - COFLA")
}
else if (dineroCofla >=1.7 && dineroCofla <1.8){
    console.log("Puedes comprar el helado de Heladovich - COFLA")
}
else if (dineroCofla >=1.8 && dineroCofla <2.9){
    console.log("Puedes comprar el helado de Helardo - COFLA")
}
else if (dineroCofla >=2.9){
    console.log("Puedes comprar el potecito de helado con confites o el pote de 1/4 kg - COFLA")
}

// Roberto
if (dineroRoberto <= 0){
    console.log("No puedes pagar ningún helado Roberto")
}

if (dineroRoberto >= 0.6 && dineroRoberto <1){
    console.log("Puedes comprar el helado de agua - Roberto")
}
else if (dineroRoberto >=1 && dineroRoberto <1.6){
    console.log("Puedes comprar el helado de crema - Roberto")
}
else if (dineroRoberto >=1.6 && dineroRoberto <1.7){
    console.log("Puedes comprar el helado de Heladix - Roberto")
}
else if (dineroRoberto >=1.7 && dineroRoberto <1.8){
    console.log("Puedes comprar el helado de Heladovich - Roberto")
}
else if (dineroRoberto >=1.8 && dineroRoberto <2.9){
    console.log("Puedes comprar el helado de Helardo - Roberto")
}
else if (dineroRoberto >=2.9){
    console.log("Puedes comprar el potecito de helado con confites o el pote de 1/4 kg - Roberto")
}

// Pedro
if (dineroPedro <= 0){
    console.log("No puedes pagar ningún helado PEDRO")
}

if (dineroPedro >= 0.6 && dineroPedro <1){
    console.log("Puedes comprar el helado de agua - PEDRO")
}
else if (dineroPedro >=1 && dineroPedro <1.6){
    console.log("Puedes comprar el helado de crema - PEDRO")
}
else if (dineroPedro >=1.6 && dineroPedro <1.7){
    console.log("Puedes comprar el helado de Heladix - PEDRO")
}
else if (dineroPedro >=1.7 && dineroPedro <1.8){
    console.log("Puedes comprar el helado de Heladovich - PEDRO")
}
else if (dineroPedro >=1.8 && dineroPedro <2.9){
    console.log("Puedes comprar el helado de Helardo - PEDRO")
}
else if (dineroPedro >=2.9){
    console.log("Puedes comprar el potecito de helado con confites o el pote de 1/4 kg - PEDRO")
}