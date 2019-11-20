import   { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Propietario } from 'src/app/Modelo/Propietarios';
import { Personas } from 'src/app/Modelo/Personas';
import { PersonaService } from 'src/app/service/persona.service';
import { Router , ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-propietarios',
  templateUrl: './propietarios.component.html',
  styleUrls: ['./propietarios.component.css']
})
export class PropietariosComponent implements OnInit {
  idpropietario:number;
  persona:Personas = new Personas();
  personas:Personas[] = []; 
  propietario:Propietario = new Propietario();
  propietarios:Propietario[] = [];
  prop:Propietario[] = [];
  prop_nombre:Propietario[] = [];
  constructor(private propietarioservice:ServiceService, private router:Router, private personasservice:PersonaService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.getpropietario();
    this.getPersonasId();
  }
  getpropietario(){
    this.propietarioservice.getPropietarios().subscribe(
       (data) => {
         this.propietarios = data ['P_CURSOR'];
         console.log(this.propietarios);
       }
    );
  }
  getPersonasId(){
    this.personasservice.getAllPersonaId().subscribe(
      (data) => {
        this.personas = data ['P_CUR_IDPERSONA'];
        console.log(this.personas);
      }
    )
  }
  delete(prop:Propietario){
    alert('hola mundo')
    this.propietarioservice.deletePropietarios(prop).subscribe( 
      data => {
         console.log(this.propietario);
         this.getpropietario();
    })
  }
  
  crearPropietarios(){
    console.table(this.propietario)        
    this.propietarioservice.crearPropietarios(this.propietario).subscribe(
      (data) =>{  
        this.router.navigate([`home/propietarios`]);
        console.log(this.propietario);
        this.getpropietario();
      });
  }
  getPropietarioId(id:number){
    this.idpropietario = id;
     console.log(id);
     this.propietarioservice.getPropietarioId(+id).subscribe(
       (data) => {
          this.prop = data['P_CUR_PROPIETARIOS'];
          console.log(this.prop);
       }
     );
  }
  modificarPropietario(propietario:Propietario, id:number){
    propietario.idpropietario = this.idpropietario;
    console.log(propietario);
     this.propietarioservice.updatePropietarios(propietario).subscribe(
       (data) => {
         this.router.navigate([`home/propietarios`]);
         this.getpropietario();
       }
     );
  }
  buscarnombre(){
    this.propietarioservice.buscarnombre(this.propietario.nombre).subscribe(
      (data) => {
        console.log(this.propietario.nombre);
        console.log(data);
        this.prop_nombre = data['P_CURSOR_NOMBRE'];
      }
    );
  }
}
