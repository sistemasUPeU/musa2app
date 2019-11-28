import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Usuarios_Opciones } from 'src/app/Modelo/Usuarios_Opciones';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-userop',
  templateUrl: './agregar-userop.component.html',
  styleUrls: ['./agregar-userop.component.css']
})
export class AgregarUseropComponent implements OnInit {
  listarusop: Usuarios_Opciones[] = [];
  usuario_opciones: Usuarios_Opciones = new Usuarios_Opciones();
  usuario_opciones2: Usuarios_Opciones = new Usuarios_Opciones();
  usuario_opciones3: Usuarios_Opciones = new Usuarios_Opciones();
  listaruse: Usuario[] = [];
  listarop1: Usuarios_Opciones[];
  listarop2: Usuarios_Opciones[];
  listarop3: Usuarios_Opciones[];
  usuario: Usuario = new Usuario();
  x:Number;
  ah:number=1;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getUse().subscribe((data) => {
      this.listaruse = data['P_CURSOR_USUARIO'];
      
    })
    this.getOpc1();
    this.usuario_opciones.idopcion=0;
    this.usuario_opciones.idopcion2=0;
    this.usuario_opciones.idopcion3=0;
  }
  atras(){
    this.router.navigate(["home/userop"]);
  }

  ObtID(usu:Usuario){
    var c= usu.login;
    this.x=usu.idusuario;
    this.usuario_opciones.idusuario=this.x;
    (<HTMLInputElement>document.getElementById("buscar1")).value = "";
    (<HTMLInputElement>document.getElementById("name")).disabled = true;
    (<HTMLInputElement>document.getElementById("name")).value= ""+c;
  }

  getUserN(){
    var x = this.usuario.login;
    alert(x);
    this.service.getUserN(x).subscribe((data)=>{
      this.listaruse = data['P_CURSOR_USUARIO'];
     
    })
  }

  getOpc1(){
    this.service.getOpc1().subscribe(
      (data) => {
        this.listarop1 = data['p_opsu'];
       
      }
    );
  }
  getRolesE(usop:Usuarios_Opciones) {
    var hola=(<HTMLSelectElement>document.getElementById('caja_op1')).value;
    this.service.getOpc2(hola).subscribe(
      (data) => {
        this.listarop2 = data['p_opsu'];
    
      }
    );
  }

  getRolesE2(usop:Usuarios_Opciones) {
    var hola=(<HTMLSelectElement>document.getElementById('caja_op2')).value;

    this.service.getOpc3(hola).subscribe(
      (data) => {
        this.listarop3 = data['p_opsu'];
       
      }
    );
  }
  here(){
    this.usuario_opciones.user_create = "Christian";
    
        this.service.createOpc(this.usuario_opciones).subscribe(data=>{
          Swal.fire(
            'REGISTRADO!',
            'Se ha asignado una Opcion al Usuario',
            'success'
          )
     this.ngOnInit();
     
     this.router.navigate(["home/userop"]);
   })
  }
}
