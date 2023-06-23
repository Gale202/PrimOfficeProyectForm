let arrayFacturas = [];

let guardarDatos = ()=>{
    let forma = document.forms['forma'];
    let fechaFac = forma['fechaFac'];
    let tipo = forma['tipo'];
    let puntoVenta = forma['puntoVenta'];
    let nroFac = forma['nroFac'];
    let nroCUIT = forma['nroCUIT'];
    let rzSoc = forma['rzSoc'];
    let monto = forma['monto'];
    let nroCAE = forma['nroCAE'];

    arrayFacturas.push(new Factura(fechaFac.value, 
        tipo.value, puntoVenta.value, nroFac.value, nroCUIT.value, rzSoc.value, monto.value, nroCAE.value));
    console.log(arrayFacturas);
}

