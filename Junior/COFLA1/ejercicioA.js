const definirCompra = (n) =>{
    let dinero = prompt(`Ingresa el dinero de ${n}`);
    if (dinero >= 0.6 && dinero <1)return (`${n}: Helado de agua`);
    if (dinero >= 1 && dinero <1.6)return (`${n}: Helado de crema`);
    if (dinero >= 1.6 && dinero <1.7)return (`${n}: Helado de heladix`);
    if (dinero >= 1.7 && dinero <1.8)return (`${n}: Helado de heladovich`);
    if (dinero >= 1.8 && dinero <2.9)return (`${n}: Helado de helardo`);
    if (dinero >= 2.9)return (`${n}: Potecito de helado con confites o pote de 1/4 kg`);
    else return (`${n}: No te alcanza para nada`);
}

console.log(definirCompra("Cofla"))
console.log(definirCompra("Pedro"))
console.log(definirCompra("Roberto"))