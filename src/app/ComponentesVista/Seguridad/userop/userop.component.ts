import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';
import { Usuarios_Opciones, Us } from 'src/app/Modelo/Usuarios_Opciones';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userop',
  templateUrl: './userop.component.html',
  styleUrls: ['./userop.component.css']
})
export class UseropComponent implements OnInit {
  listarusop: Usuarios_Opciones[] = [];
  usuario_opciones: Usuarios_Opciones = new Usuarios_Opciones();
  us:Us = new Us();
  a:Number;
  b:Number;
  constructor(private service:ServiceService, private router:Router, private loginService: LoginService) { }

  ngOnInit() {
    this.service.getUsOp().subscribe((data) => {
      this.listarusop = data['p_opsu'];
      console.log(this.listarusop);
    })
  }

  Agregar(){
    this.router.navigate(["home/agregar-userop"])
  }

  getUsOpN(){
    let c=this.usuario_opciones.login;
    alert(c);
    this.service.getUsOpN(c).subscribe(
      (data) => {
      this.listarusop = data['p_opsu'];
        console.log(this.listarusop);
        (<HTMLInputElement>document.getElementById("buscar1")).value = "";
      }
    );
  }

  getUsOpE(){
    let c=this.usuario_opciones.estado;
    alert(c);
    this.service.getUsOpE(c).subscribe(
      (data) => {
      this.listarusop = data['p_opsu'];
        console.log(this.listarusop);
      }
    );
  }
  limpiar(){
    this.ngOnInit();
  }

  EliminarOpc(usop:Usuarios_Opciones){
    var x = usop.idusuario;
    //alert(x);
    var c = usop.idopcion;
    //alert(c);
    usop.user_modify = " "+this.loginService.personas.login;;
    
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

        this.service.deleteUsOp(usop).subscribe(data=>{
          //alert(">>>> REGISTRO DESACTIVADO <<<<");
          this.ngOnInit();
      
        }) 
        Swal.fire(
          'Desactivado!',
          'Ha sido desactivado',
          'success'
        )
      }
    })
  }
  ActivarUsr(usop: Usuarios_Opciones) {
    var x = usop.idusuario;
   // alert(x);
    var c = usop.idopcion;
    //alert(c);
    usop.user_modify = " "+this.loginService.personas.login;;
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

        this.service.activarUsOp(usop).subscribe((data) => {
          this.usuario_opciones = data;
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
