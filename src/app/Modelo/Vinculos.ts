export interface Vinculacion {
  vinc: Vinc[];
}

export interface Vinc {
  nombre: string;
  apellido: string;
  fechainicio: Date;
  fechafin: Date;
  estado: number;
}
