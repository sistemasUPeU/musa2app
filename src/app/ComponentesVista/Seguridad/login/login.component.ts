import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import Swal from 'sweetalert2';
import { LoginService } from "src/app/service/login.service";
import { CanActivate } from '@angular/router';
import { SeviceloginService } from "src/app/service/servicelogin.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario : Usuario;
  
  constructor(private loginService:LoginService ,private router:Router, private serviceLoginService:SeviceloginService) {
    this.usuario = new Usuario();

   }
  
  ngOnInit() {
    
    if(this.loginService.isAuthenticated()){
      Swal.fire('Login','Hola '+this.loginService.personas.nombre+' ya estas Autentificado', 'info');
      this.router.navigate(['/home'])
    }
  }
  login():void{
    //console.log(this.usuario.login);
    localStorage.setItem("user", this.usuario.login )
    
    if(this.usuario.login==null || this.usuario.password==null){
      Swal.fire('Error Login','Username o Password incorrectos');
      
      return;
    } 
    this.loginService.login(this.usuario).subscribe(response=>{
     // console.log(response);
      //let datos = JSON.parse(atob(response.access_token.split(".")[1]));
      this.loginService.guardarUsuario(response.access_token);
      this.loginService.guardarToken(response.access_token);
      let usuario = this.loginService.personas;
      
      this.loginService.guardarUsuario(response.access_token)
      this.router.navigate(['/home']);
      Swal.fire('login', 'Bienvenido: '+usuario.nombre+' has iniciado Sesión con éxito..!','success');
      
      
    }, error =>{
      if(error.status==401){
        Swal.fire('Error Login', 'Usuario o clave incorrectas!', 'error');
      }
    }
    );
  }

}
