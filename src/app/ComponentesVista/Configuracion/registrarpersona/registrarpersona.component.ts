import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';

import { NgForm } from '@angular/forms';
import { Personas } from 'src/app/Modelo/Personas';


@Component({
  selector: 'app-registrarpersona',
  templateUrl: './registrarpersona.component.html',
  styleUrls: ['./registrarpersona.component.css']
})
export class RegistrarpersonaComponent implements OnInit {
 persona: Personas= new Personas();
  id: number

  per: Personas = new Personas();
  personasLista: Persona[] = [];
  nrodoc: number;
  idpersonas: String;
  Personas: Persona[];
  router: any;
  service: any;
  constructor(private personaService:PersonaService) { }

  ngOnInit() {
    this.getAllPersona();
  }
getAllPersona(){
  this.personaService.getAllPersona().subscribe(
    (data) => {
      this.personasLista = data['P_CURSOR'];
      console.log(this.personasLista)
    }
  );
}
searchPersona(){
  if (this.nrodoc != null && this.nrodoc > 0) {
    this.personaService.searchPersona(this.nrodoc).subscribe(
      (data) => {
        this.personasLista = data['P_CURSOR'];
      }
    );
  } else {
    this.getAllPersona();
}
}
 buscar(f: NgForm){
   this.personaService.postPersonas(f.value).subscribe( response => {
     console.log(response)
  }, error => {
 console.log(error)
   })
   alert("Se registro persona Correctamente....")
 }
 Eliminar(id: number){
   console.log(id)
   this.personaService.deletePerson(id).subscribe(data =>{
alert('Registro Eliminado Correctamente.....!!');
console.log(data)
this.ngOnInit();
   })
}
}