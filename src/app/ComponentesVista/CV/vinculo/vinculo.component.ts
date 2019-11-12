import { Component, OnInit, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Vinculos, Vinculo, Vinupd } from 'src/app/Modelo/Vinculos';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-vinculo',
  templateUrl: './vinculo.component.html',
  styleUrls: ['./vinculo.component.css']
})
export class VinculoComponent implements OnInit {

  /////// Arraysss

  listavinculos:Vinculos[];


  /////// Variablesss

  tipo: number;

  /////// Objetossssss

  vincu : Vinupd = new Vinupd();

  constructor(private service: ServiceService, private router: Router) { }
  
  ngOnInit() {
    this.tipo=3;
    this.listar();
  }
  listar(){
    this.service.getVinculo(this.tipo).subscribe(
      (data) => {
        this.listavinculos = data['P_CUR_VINCULOS']
        console.log(this.listavinculos);  
      }
      );
  }

  /// Metodo que envia idvinculo, tipo para el modificar

  valor(tipo2:number,id:number){
    console.log(tipo2);
    console.log(id);
    localStorage.setItem("idvinculo",id.toString());
    localStorage.setItem("tipo",tipo2.toString());
    this.router.navigate(['/home/vinculomod']);
  }

  /// Metodo para redireccionar a ingresar a Nuevo Vinculo

  Modo(){   
    localStorage.setItem("tipo",'3');
    this.router.navigate(['/home/vinculoopc']);
   }
   

   /// Metodo para modificar el estado de vinculo 

   eliminar(idvinculo: number, estadito: number){
     alert(estadito + " " + idvinculo)
     this.vincu.estado = estadito;
     this.vincu.idvinculo= idvinculo;
     this.service.uptEstadovin(this.vincu).subscribe(data => {
       console.log(this.vincu)
       alert(data["P_MSGERROR"])
       alert("lo lograste")
       this.listar()
     })
   }
   
}
