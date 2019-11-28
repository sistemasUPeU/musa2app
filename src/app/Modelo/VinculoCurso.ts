export class VinculoCurso{
    idcurso:number;
    idconductor:number;
    estado: number;
    fechaemision: Date;
    fechacaducidad: Date;
    resultado: string;
}
export class VCpost{
    idcurso:number;
    nombrecurso: string;
    nombreconductor: string;
    idconductor: number;
    estado: number;
    fechaemision: Date;
    fechacaducidad: Date;
    resultado: string;
}
export class cur{
    idcurso: number
    nombre: string
}
export class con{
    idconductor: number
    nombre: string
}