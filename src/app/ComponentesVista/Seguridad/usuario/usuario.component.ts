import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Usuario } from 'src/app/Modelo/Usuario';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  listaruser: Usuario[] = [];
  usuario: Usuario = new Usuario();
  usu:Usuario;
  userf: Usuario=new Usuario();
  P_CURSOR_USUARIO: Usuario =new Usuario();
  loadUsuarioData: Usuario[] = [];
  ah:number=1;
  constructor( private service:ServiceService , private router:Router, private loginService: LoginService) { }

  ngOnInit() {
    this.getUsuario();
    
  }

getUsuario(){
  this.service.getUsuario().subscribe((data) => {
    this.listaruser = data['P_CURSOR'];

})
}


  Ros(){
    this.router.navigate(["home/rolus"]);
  }
  getUsuarioN(user:Usuario) {
  let c=this.usuario.login;
  
    this.service.getUsuarioN(c).subscribe(
      (data) => {
      this.listaruser = data['P_CURSOR_USUARIO'];
       
        (<HTMLInputElement>document.getElementById("buscar1")).value = "";
      }
    );
  }
  getUsuarioE(user:Usuario) {
    let c=this.usuario.estado;
   
      this.service.getUsuarioE(c).subscribe(
        (data) => {
        this.listaruser = data['P_CURSOR_USUARIO'];
         
          (<HTMLInputElement>document.getElementById("buscar1")).value = "";
        }
      );
    }

  limpiar(){
    this.ngOnInit();
  }

  Agregar(){
    this.router.navigate(["home/agregar-user"]);
  }
  user(): void {
    this.router.navigateByUrl('/usuario');
  }
  EliminarUsuario(user:Usuario){
    let c=user.idusuario;
   
    Swal.fire({
      title: 'Estas seguro?',
      text: "Esta accion no se podra revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {

        this.service.deleteUsuario(user).subscribe(data=>{
         
          this.listaruser=this.listaruser.filter(u=>u!==user);
          
          this.ngOnInit();
      
        }) 
        Swal.fire(
          'Eliminado!',
          'El usuario ha sido eliminado',
          'success'
        )
      }
    })
   }
  loadPersona(user: Usuario): void {
   
    this.service.getUsuarioId(user.idusuario).subscribe((data) => {
      this.loadUsuarioData = data['P_CUR_USUARIOS'];
    
    })
  }
  ActualizarUser(P_CURSOR_USUARIO: Usuario) {
 
    P_CURSOR_USUARIO.user_modify =" "+this.loginService.personas.login;

    Swal.fire({
      title: 'Estas seguro?',
      text: "Esta accion no se podra revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, modificar!'
    }).then((result) => {
      if (result.value) {
      

        this.service.updateUsuario(P_CURSOR_USUARIO).subscribe((data) => {
          this.userf = data;

          this.ngOnInit();
        })
        Swal.fire(
          'Modificar!',
          'La accion ha sido cambiada',
          'success'
        )
      }
    })
  }
}
