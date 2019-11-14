import { Component, OnInit } from '@angular/core';
import { TarjetacService } from 'src/app/service/tarjetac.service';
import { Tarjetac } from 'src/app/Modelo/Tarjetac';

@Component({
  selector: 'app-tarjetac',
  templateUrl: './tarjetac.component.html',
  styleUrls: ['./tarjetac.component.css']
})
export class TarjetacComponent implements OnInit {

  tarjetac :Tarjetac=new Tarjetac();
  tarj:Tarjetac=new Tarjetac();
  tarjs:Tarjetac=new Tarjetac();
  t : Tarjetac=new Tarjetac();


  tarjetacs: Tarjetac[] = []

  constructor(private tarjetacService:TarjetacService) { }
  
  ngOnInit() {
    
    this.tarjetacService.listtarjeta().subscribe(
      (data) => {
        this.tarjetacs=data['p_tarjetac'];
    
        console.log(this.tarjetacs);
      }
    );
  }
  creartarjetac(){
    this.tarjetacService.creartarjeta(this.tarjetac).subscribe(
      (data) =>{ 
        this.ngOnInit();
       }
    );
  }
  Eliminar(tarjetac:Tarjetac){
    this.tarjetacService.eliminartarjeta(tarjetac.idtarjetac).subscribe((data)=>{
      alert(tarjetac.idtarjetac)
      this.ngOnInit();

    });

  }
  Editar(tarjeta:Tarjetac){
    console.log(tarjeta)
    this.tarjetacService.modificartarjeta(tarjeta).subscribe((data)=>{
      
      this.ngOnInit();
    });
  }
  Actualizar(tar:Tarjetac){
    this.tarj=tar;
    console.log(tar)
  }

  Buscar(){
    this.tarjetacService.buscarnro(this.tarjs.nrodocumento).subscribe((data)=>{
      console.log(this.tarjs.nrodocumento)
      console.log(data)
      this.tarjetacs=data['p_tarj'];
      (<HTMLInputElement>document.getElementById("buscar1")).value = "";
      
      
    });

  }
    Estado(){
    this.tarjetacService.listarestado(this.t.estado).subscribe((data)=>{
      this.tarjetacs=data['p_tarjetac'];
      
    })

  }
  Limpiar(){
    this.ngOnInit();
    (<HTMLSelectElement>document.getElementById("inputGroupSelect01")).value ="";
  }
}



