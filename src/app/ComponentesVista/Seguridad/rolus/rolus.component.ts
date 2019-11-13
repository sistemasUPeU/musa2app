import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Usuario } from 'src/app/Modelo/Usuario';

@Component({
  selector: 'app-rolus',
  templateUrl: './rolus.component.html',
  styleUrls: ['./rolus.component.css']
})
export class RolusComponent implements OnInit {
  listarolusu: Usuario[] = [];
  usuario: Usuario = new Usuario();

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
    alert(c);
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
    alert(c);
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
}
