import { Component, OnInit } from '@angular/core';
import { Roles, RolesF } from 'src/app/Modelo/Roles';
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prueba-editar',
  templateUrl: './prueba-editar.component.html',
  styleUrls: ['./prueba-editar.component.css']
})
export class PruebaEditarComponent implements OnInit {
  constructor(private service:ServiceService, private router:Router) { }
  roles:Roles=new Roles();
  rolesF:RolesF=new RolesF();
  rol:Roles;
  id:number ;
  ngOnInit() {
    this.EditarR();
  }
  
  EditarR(){
    this.id = parseInt(localStorage.getItem("IDROL"));
    this.service.getLibroIdL(this.id).subscribe(data=>{
      this.roles=data;
    })
  }
  ActualizarL(roles:Roles){

    alert(this.id);
    var c=this.roles.nombre;
    alert(c);
    var x=this.roles.estado;
    alert(x);
    alert(this.roles);
    console.log(this.roles);
    
     this.service.updateLibro(this.id,roles).subscribe(data=>{
        this.roles=data;
       alert(this.roles);
    this.router.navigate(["home/rol"]);
     })
  }
}
