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

  personaEditar: Personas = new Personas();
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

 save(){
   alert(this.per.nombre);
  this.personaService.postPersonas(this.per).subscribe( response => {
    console.log(response)
  }, error => {
    console.log(error)
  })
alert("registrado correctamente...")
console.log(Response)
this.ngOnInit();
 }

 Eliminar(id: number){
   console.log(id)
   this.personaService.deletePerson(id).subscribe(data =>{
alert('Registro Eliminado Correctamente.....!!');
console.log(data)
this.ngOnInit();
   })
}

editar(persona: Personas){
console.log("person editart: ",persona)
this.personaEditar = persona;
// this.personaService.
}

}