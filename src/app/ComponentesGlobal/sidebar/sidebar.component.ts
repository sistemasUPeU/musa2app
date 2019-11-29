import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

import 'src/assets/js/script.js'
import { Opciones } from 'src/app/Modelo/Opciones';
import { OpcionesService } from 'src/app/service/opciones.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  opciones1: Opciones[] = [];

  constructor(private loginService:LoginService, private router: Router,private opcionesService:OpcionesService) { }
  logout():void{
    
    Swal.fire({
      title: 'Cerrar Sesión',
      text: "¿Está seguro de cerrar sesión?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      
      confirmButtonText: 'Cerrar Sesión'
    }).then((result) => {
      if (result.value) {
        this.loginService.logout();
      Swal.fire('Logout', 'Hola '+ this.loginService.personas.nombre+' has cerrado sesión con Exito!', 'success')
      this.router.navigate(['/login']);
        
      }
    })
    
  }

  ngOnInit() {

     let idusuario=this.loginService.personas.idusuario;
     //console.log(idusuario+" quejesto");
    this.cargarOpciones(idusuario);
  }
   caja() {
    Swal.fire({
      title: 'Submit your Github username',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        })
      }
    })
  
   }

   cargarOpciones(idusuario:number){
    let c=idusuario;
    //console.log(c+"es el usuario");  si llega el usuario
     this.opcionesService.listopciones(c).subscribe(
      (data) => {
        this.opciones1=data['p_cur_opcion'];
        console.log(this.opciones1);
      }
    );
  }

}

