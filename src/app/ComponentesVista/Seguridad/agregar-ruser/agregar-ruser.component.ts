import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Modelo/Usuario';
import { ServiceService } from 'src/app/service/service.service';
import { Roles } from 'src/app/Modelo/Roles';
import { Router } from '@angular/router';
import { Rol_Usuarios } from 'src/app/Modelo/Rol_Usuario'

@Component({
  selector: 'app-agregar-ruser',
  templateUrl: './agregar-ruser.component.html',
  styleUrls: ['./agregar-ruser.component.css']
})
export class AgregarRuserComponent implements OnInit {

  listaruse: Usuario[] = [];
  listaroles:Roles[];
  usuario: Usuario = new Usuario();
  rolu: Rol_Usuarios = new Rol_Usuarios();
  x:Number;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getUse().subscribe((data) => {
      this.listaruse = data['P_CURSOR_USUARIO'];
      console.log(this.listaruse);
    })
    this.getAllRoles();
  }
  atras(){
    this.router.navigate(["home/rolus"]);
  }
  
  limpiar(){
    (<HTMLInputElement>document.getElementById("buscar1")).value = "";
    this.ngOnInit();
  }

  getAllRoles() {
    this.service.getAllRoles().subscribe(
      (data) => {
        this.listaroles = data['p_cur_rol'];
        console.log(this.listaroles)
      }
    );
  }
  SaveRU(){
    alert(this.rolu.idrol);
    this.rolu.user_create = "Christian";
    var x = this.x ;
    this.rolu.idusuario = x;
    alert(this.rolu.idusuario);
    console.log(this.rolu);
    this.service.createRU(this.rolu).subscribe(data=>{
      
     alert(">>>> REGISTRO GUARDADO <<<<");
     this.router.navigate(["home/rolus"]);
     })

  }
  ObtID(usu:Usuario){
    var c= usu.login;
    this.x=usu.idusuario;
    (<HTMLInputElement>document.getElementById("buscar1")).value = "";
    
    (<HTMLInputElement>document.getElementById("user")).disabled = true;
    (<HTMLInputElement>document.getElementById("user")).value= ""+c;
  }

  getUserN(){
    var x = this.usuario.login;
    alert(x);
    this.service.getUserN(x).subscribe((data)=>{
      this.listaruse = data['P_CURSOR_USUARIO'];
      console.log(this.listaruse);
    })
  }
}
