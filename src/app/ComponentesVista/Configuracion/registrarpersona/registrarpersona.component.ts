import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';


@Component({
  selector: 'app-registrarpersona',
  templateUrl: './registrarpersona.component.html',
  styleUrls: ['./registrarpersona.component.css']
})
export class RegistrarpersonaComponent implements OnInit {
persona: Persona;
personasLista: Persona[] = [];
nrodoc
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
}