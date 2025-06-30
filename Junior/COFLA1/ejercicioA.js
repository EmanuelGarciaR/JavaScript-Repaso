const definirCompra = (n) =>{
    let dinero = parseFloat(prompt(`Ingresa el dinero de ${n}`));
    if (dinero >= 0.6 && dinero <1)return (`${n}: Helado de agua y el vuelto es:${(dinero-0.6).toFixed(2)}`);
    if (dinero >= 1 && dinero <1.6)return (`${n}: Helado de crema y el vuelto es:${(dinero-1).toFixed(2)}`);
    if (dinero >= 1.6 && dinero <1.7)return (`${n}: Helado de heladix y el vuelto es:${(dinero-1.6).toFixed(2)}`);
    if (dinero >= 1.7 && dinero <1.8)return (`${n}: Helado de heladovich y el vuelto es:${(dinero-1.7).toFixed(2)}`);
    if (dinero >= 1.8 && dinero <2.9)return (`${n}: Helado de helardo y el vuelto es:${(dinero-1.8).toFixed(2)}`);
    if (dinero >= 2.9)return (`${n}: Potecito de helado con confites o pote de 1/4 kg y el vuelto es:${(dinero-2.9).toFixed(2)}`);
    else return (`${n}: No te alcanza para nada`);
}

console.log(definirCompra("Cofla"))
console.log(definirCompra("Pedro"))
console.log(definirCompra("Roberto"))