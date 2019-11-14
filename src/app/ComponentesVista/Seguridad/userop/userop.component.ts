import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';
import { Usuarios_Opciones, Us } from 'src/app/Modelo/Usuarios_Opciones';

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
  constructor(private service:ServiceService, private router:Router) { }

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
    alert(x);
    var c = usop.idopcion;
    alert(c);
    usop.user_modify = "Christian1";
    this.service.deleteUsOp(usop).subscribe(data=>{
      alert(">>>> REGISTRO DESACTIVADO <<<<");
      this.ngOnInit();
  
    })  
  }
  ActivarUsr(usop: Usuarios_Opciones) {
    var x = usop.idusuario;
    alert(x);
    var c = usop.idopcion;
    alert(c);
    usop.user_modify = "Christian12";
    this.service.activarUsOp(usop).subscribe((data) => {
      this.usuario_opciones = data;
      console.log(data);
      alert('>>>> REGISTRO ACTIVADO <<<<');
      this.ngOnInit();
    })
  }

}
