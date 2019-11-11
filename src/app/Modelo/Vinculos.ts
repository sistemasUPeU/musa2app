export class Vinculos {
  IDVINCULO: number;
  TIPOVINCULO: number;
  NOMBRE: string;
  APELLIDO: string;
  FECHAINICIO: Date;
  FECHAFIN: Date;
  estado: number;
}

export class Vinculo {
  idvinculo: number;
  tipovinculo: number;
  estado: number;
  idconductor: number;  
  descripcion: string;
  fechainicio: Date;
  fechafin: Date;
  usercreate: string;
  datecreate: Date;
  usermodify: string;
  datemodify: Date;
  idpropietario: number;                                                                                                    
  idempleado: number;
  idvehiculo: number
}
export class Contador{
  CONTADOR:number
}
export class VincuRequi {
  IDVINCULO: number;
  IDREQUISITO: number;
  FECHAINICIO: Date;
  FECHAFIN: Date;
  ESTADO: number;
  ENLACEDOC: string;
}

export class Vinupd {
  idvinculo: number;
  estado: number;
}