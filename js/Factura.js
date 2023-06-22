class Factura{
    static contadorFactura = 0;
    constructor(fechaFac, tipoFac, nroPuntoVenta, nroFac, nroCUIT, rzSoc, monto){
        this._idFactura = ++Factura.contadorFactura;
        this._fechaFac = fechaFac;
        this._tipoFac = tipoFac;
        this._nroPuntoVenta = nroPuntoVenta;
        this._nroFac = nroFac;
        this._nroCUIT = nroCUIT;
        this._rzSoc = rzSoc;
        this._monto = monto;
    }
    
    get idFactura(){
        return this._idFactura;
    }

    get fechaFac(){
        return this._fechaFac;
    }
    set fechaFac(fechaFac){
        this._fechaFac = fechaFac;
    }

    get tipoFac(){
        return this._tipoFac;
    }
    set tipoFac(tipoFac){
        this._tipoFac = tipoFac;
    }

    get nroPuntoVenta(){
        return this._nroPuntoVenta;
    }
    set nroPuntoVenta(nroPuntoVenta){
        this._nroPuntoVenta = nroPuntoVenta;
    }

    get nroFac(){
        return this._nroFac;
    }
    set nroFac(nroFac){
        this._nroFac = nroFac;
    }

    get nroCUIT(){
        return this._nroCUIT;
    }
    set nroCUIT(nroCUIT){
        this._nroCUIT = nroCUIT;
    }

    get rzSoc(){
        return this._rzSoc;
    }
    set rzSoc(rzSoc){
        this._rzSoc = rzSoc;
    }

    get monto(){
        return this._monto;
    }
    set monto(monto){
        this._monto = monto;
    }

}