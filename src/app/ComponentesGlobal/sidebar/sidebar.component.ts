import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';
import 'src/assets/js/script.js'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
    
  constructor(private loginService:LoginService, private router: Router) { }
  logout():void{
    this.loginService.logout();
    //let usuario = this.;
    Swal.fire('Logout', 'Hola '+ this.loginService.personas.nombre+' has cerrado sesión con Exito!', 'success')
      this.router.navigate(['/login']);
  }

  ngOnInit() {
    
  }
   
  
  
}
