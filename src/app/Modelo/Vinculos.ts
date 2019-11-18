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
  fechainicio: string;
  fechafin: string;
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
  idvinculo: number;
}
export class VincuRequis {
  idvinculo: number;
  idrequisito: number;
  constructor(vincu:number, requi:number) {
    this.idvinculo=vincu;
    this.idrequisito=requi;
 }
}
export class Vinupd {
  idvinculo: number;
  estado: number;
}