import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Roles } from 'src/app/Modelo/Roles';
import { Rol_Usuarios } from 'src/app/Modelo/Rol_Usuario';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-user',
  templateUrl: './agregar-user.component.html',
  styleUrls: ['./agregar-user.component.css']
})
export class AgregarUserComponent implements OnInit {
  listaruserper: Usuario[] = [];
  listaroles:Roles[];
  listarusu:Usuario[];
  sv:[];
  al:Usuario[];
  usuario: Usuario = new Usuario();
  rolu: Rol_Usuarios = new Rol_Usuarios();
  x:Number;
  verificar:Number;
  constructor(private service:ServiceService, private router:Router, private loginService:LoginService) { }

  ngOnInit() {
    this.service.getUserPer().subscribe((data) => {
      this.listaruserper = data['P_CURSOR_USUARIO'];
      //console.log(this.loginService.personas.login);
    })
    this.getAllRoles();
    this.getAllUser();
  }
  limpiar(){
    (<HTMLInputElement>document.getElementById("buscar1")).value = "";
    this.ngOnInit();
  }
  atras(){
    this.router.navigate(["home/usuario"]);
  }
  getPerN(){
    var x = this.usuario.nombre;
    //alert(x);
    this.service.getUserPerN(x).subscribe((data)=>{
      this.listaruserper = data['P_CURSOR_USUARIO'];
      console.log(this.listaruserper);
    })
  }

  getAllRoles() {
    this.service.getAllRoles().subscribe(
      (data) => {
        this.listarusu = data['p_cur_rol'];
        console.log(this.listarusu)
      }
    );
  }

  getAllUser() {
    this.service.getAllUser().subscribe(
      (data) => {
        this.listarusu = data['P_CURSOR_USUARIO'];
        console.log(this.listarusu)
      }
    );
  }
  ObtID(user:Usuario){
    var c= user.nombre + " " + user.apellido;
    this.x=user.idpersona;
    (<HTMLInputElement>document.getElementById("buscar1")).value = "";
    (<HTMLInputElement>document.getElementById("name")).disabled = true;
    (<HTMLInputElement>document.getElementById("name")).value= ""+c;
  }
  Save(){
    this.usuario.idpersona =  this.x;
    this.usuario.user_create = " "+this.loginService.personas.login;
   // alert(this.usuario.user_create);
    console.log(this.usuario)
        this.service.createUsuario(this.usuario).subscribe(data=>{
          Swal.fire({
            title: "Usuario Guardado!",
            text: "Se Registro el Nuevo Usuario!",
            icon: "success",
            button: "OK",
          });
     this.ngOnInit();
     console.log(this.usuario)
     this.router.navigate(["home/usuario"]);
   })
  }

  VerificarUser(){
    var sv=this.usuario.login;
    let verificar = 0;
    this.listarusu.forEach(function(ef){
      console.log(ef.login);
      while (sv==ef.login) {
        //alert("ya existe");
        Swal.fire({
          title: "Usuario Reptido!",
          text: "Ingrese un usuario diferente!",
          icon: "warning",
          button: "OK",
        });
        verificar=1;
        this.router.navigate(["home/usuario"])
      }
    })
    //alert("no existe");
      this.Save();
      
    //this.Save();
    //let arr=Cliente;
    //if (this.cliente.c_dni=="asd") {
      
   // }else{
   //   alert("HAS FRACASADO EFE")
   // }
  }

  trasladar(){
    this.router.navigate(["home/rolus"]);
  }
}
