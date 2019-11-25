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
  pro_borrar:Propietario = new Propietario();
  nropadron="689";
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
  delete(id:number){
    Swal.fire({
      title: 'Estas seguro de cambiar el estado?',
      text: "Ya no hay vuelta atrás!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cambialo!'
    }).then((result) => {
      if (result.value) {
        this.pro_borrar.idpropietario = id; 
    this.propietarioservice.deletePropietarios(id).subscribe( 
      data => {
         console.log(this.propietario);
         this.getpropietario();
    })
        Swal.fire(
          'Cambiado!',
          'El estado del propietario ha sido cambiado',
          'success'
        )
      }
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
      Swal.fire(
        'Hecho!',
        'El registro se ha registrado con exito',
        'success'
      )
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
     Swal.fire(
      'Hecho!',
      'El registro se ha modificado con exito',
      'success'
    )
  }
  buscarnombre(){
    this.propietarioservice.buscarnombre(this.propietario.nombre).subscribe(
      (data) => {
        console.log(this.propietario.nombre);
        console.log(data);
        this.propietarios = data['P_CURSOR_NOMBRE'];
      }
    );
  }
  limpiar(){
    this.getpropietario();
  }
}
