export class Kardex {
    IDKARDEX: number;
    TIPOMOVIMIENTO: String;
    CONCEPTO: number;
    ESTADO: number;
    FECHA: string;
    NROCOMPROBANTE: number;
    NROSERIE: number;
    IDEMPLEADO: number;
    IDTIPOCOMPROBANTE: number;
    IDPEDIDO: number;
}

export class KardexProducto{
    IDKARDEX_PRODUCTO: number;
    PRECIOUNITARIO: number;
    PRECIOTOTAL: number;
    CANTIDAD: number;
    IDKARDEX: number;
    IDPRODUCTO: number;
}