import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Rol_Usuarios } from 'src/app/Modelo/Rol_Usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rolus',
  templateUrl: './rolus.component.html',
  styleUrls: ['./rolus.component.css']
})
export class RolusComponent implements OnInit {
  listarolusu: Usuario[] = [];
  usuario: Usuario = new Usuario();
  listarusr: Rol_Usuarios[];
  rol_usuario : Rol_Usuarios = new Rol_Usuarios();
  ah:number=1;
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.service.getRolus().subscribe((data) => {
      this.listarolusu = data['P_CURSOR_USUARIO'];
    
    })
  }
  Agregar(){
    this.router.navigate(["home/agregar-ruser"]);
  }
  Ros(){
    this.router.navigate(["home/usuario"])
  }
  getRolusN(){
    let c=this.usuario.login;
  
    this.service.getRolusN(c).subscribe(
      (data) => {
      this.listarolusu = data['P_CURSOR_USUARIO'];
        
        (<HTMLInputElement>document.getElementById("buscar1")).value = "";
      }
    );
  }
  getRolusE(){
    let c=this.usuario.estado;
   
    this.service.getRolusE(c).subscribe(
      (data) => {
      this.listarolusu = data['P_CURSOR_USUARIO'];
      
      }
    );
  }
  limpiar(){
    this.ngOnInit();
  }

  EliminarUsr(usr:Rol_Usuarios){
    var x = usr.idrol;
   
    var c = usr.idusuario;
   
    usr.user_modify = "Christian13";

    Swal.fire({
      title: 'Estas seguro?',
      text: "Esta accion no se podra revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, desactivar!'
    }).then((result) => {
      if (result.value) {

        this.service.deleteUsr(usr).subscribe(data=>{
          
          this.ngOnInit();
        }) 
        Swal.fire(
          'Desactivado!',
          'Ha sido desactivada',
          'success'
        )
      }
    })
  }
  ActivarUsr(usr: Rol_Usuarios) {
    var x = usr.idrol;
  
    var c = usr.idusuario;
   
    usr.user_modify = "Christian13";

    Swal.fire({
      title: 'Estas seguro?',
      text: "Esta accion no se podra revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, activar!'
    }).then((result) => {
      if (result.value) {

        this.service.activarUsr(usr).subscribe((data) => {
          this.rol_usuario = data;
    
          this.ngOnInit();
        })
        Swal.fire(
          'Activado!',
          'Ha sido activado',
          'success'
        )
      }
    })
  }
}
