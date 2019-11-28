export class Requisitos{
    IDREQUISITO: number;
    NOMBRE: string;
    TIPOREQUISITO: number;
    ESTADO: number;
}
export class RequisitoVinculo {
    IDVINCULO: number;
    IDREQUISITO: number;
    NOMBRE: string;
    FECHAINICIO: Date;
    FECHAFIN: Date;
    ESTADO: number;
    ENLACEDOC: string;
}