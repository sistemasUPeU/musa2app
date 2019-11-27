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
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.service.getRolus().subscribe((data) => {
      this.listarolusu = data['P_CURSOR_USUARIO'];
      console.log(this.listarolusu);
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
    //alert(c);
    this.service.getRolusN(c).subscribe(
      (data) => {
      this.listarolusu = data['P_CURSOR_USUARIO'];
        console.log(this.listarolusu);
        (<HTMLInputElement>document.getElementById("buscar1")).value = "";
      }
    );
  }
  getRolusE(){
    let c=this.usuario.estado;
   // alert(c);
    this.service.getRolusE(c).subscribe(
      (data) => {
      this.listarolusu = data['P_CURSOR_USUARIO'];
        console.log(this.listarolusu);
      }
    );
  }
  limpiar(){
    this.ngOnInit();
  }

  EliminarUsr(usr:Rol_Usuarios){
    var x = usr.idrol;
   // alert(x);
    var c = usr.idusuario;
    //alert(c);
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
          //alert(">>>> REGISTRO DESACTIVADO <<<<");
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
    //alert(x);
    var c = usr.idusuario;
   // alert(c);
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
          console.log(data);
          //alert('>>>> REGISTRO ACTIVADO <<<<');
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
