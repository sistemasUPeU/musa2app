import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Usuario } from 'src/app/Modelo/Usuario';

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
  constructor( private service:ServiceService , private router:Router) { }

  ngOnInit() {
    this.getUsuario();
    
  }

getUsuario(){
  this.service.getUsuario().subscribe((data) => {
    this.listaruser = data['P_CURSOR'];
    console.log(data);
})
}


  Ros(){
    this.router.navigate(["home/rolus"]);
  }
  getUsuarioN(user:Usuario) {
  let c=this.usuario.login;
    alert(c);
    this.service.getUsuarioN(c).subscribe(
      (data) => {
      this.listaruser = data['P_CURSOR_USUARIO'];
        console.log(this.listaruser);
        (<HTMLInputElement>document.getElementById("buscar1")).value = "";
      }
    );
  }
  getUsuarioE(user:Usuario) {
    let c=this.usuario.estado;
      alert(c);
      this.service.getUsuarioE(c).subscribe(
        (data) => {
        this.listaruser = data['P_CURSOR_USUARIO'];
          console.log(this.listaruser);
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
    alert(c);
    this.service.deleteUsuario(user).subscribe(data=>{
      alert(">>>> REGISTRO ELIMINADO <<<<");
      this.listaruser=this.listaruser.filter(u=>u!==user);
      this.ngOnInit();
  
    })  
   }
  loadPersona(user: Usuario): void {
    alert(user.idusuario);
    this.service.getUsuarioId(user.idusuario).subscribe((data) => {
      this.loadUsuarioData = data['P_CUR_USUARIOS'];
      console.log(data);
    })
  }
  ActualizarUser(P_CURSOR_USUARIO: Usuario) {
    alert(P_CURSOR_USUARIO.idusuario);
    alert(P_CURSOR_USUARIO.login);
    //alert(P_CURSOR_USUARIO.password);
    //alert(P_CURSOR_USUARIO.estado);
    P_CURSOR_USUARIO.user_modify = "Christian"
    this.service.updateUsuario(P_CURSOR_USUARIO).subscribe((data) => {
      this.userf = data;
      console.log(data);
      alert('Registro modificado correctamente...!');
      this.ngOnInit();
    })
  }
}
