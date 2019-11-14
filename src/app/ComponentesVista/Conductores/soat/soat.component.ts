import { Component, OnInit } from '@angular/core';
import { Soat } from 'src/app/Modelo/Soat';
import { SoatService } from 'src/app/service/soat.service';
@Component({
  selector: 'app-soat',
  templateUrl: './soat.component.html',
  styleUrls: ['./soat.component.css']
})
export class SoatComponent implements OnInit {

  soat :Soat=new Soat();
  so:Soat=new Soat();
  soa:Soat=new Soat();
  s: Soat=new Soat();


  soats: Soat[] = []

  constructor(private soatservice:SoatService) { }
  
  ngOnInit() {
    
    this.soatservice.listsoats().subscribe(
      (data) => {
        this.soats=data['P_CURSOR'];
        console.log(this.soats)
      }
    );
  }
  CREARSOAT(){
    this.soatservice.crearsoat(this.soat).subscribe(
      (data) =>{ 
        this.ngOnInit(); }

    );
  }
  Eliminar(soat:Soat){
    this.soatservice.eliminarsoat(soat.idsoat).subscribe((data)=>{
      alert(soat.idsoat)
      this.ngOnInit();

    });

  }
  Editar(soat:Soat){
    console.log(soat)
    this.soatservice.modificarsoat(soat).subscribe((data)=>{
      
      this.ngOnInit();
    });
  }
  Actualizar(soat:Soat){
    this.so=soat;
    console.log(soat)
  }

  Buscar(){
    this.soatservice.buscarnro(this.soa.nrodocumento).subscribe((data)=>{
      console.log(this.soa.nrodocumento)
      console.log(data)
      this.soats=data['P_CURSOR'];
      
      
    });

  }
    Estado(){
    this.soatservice.listarestado(this.s.estado).subscribe((data)=>{
      this.soats=data['P_CURSOR'];
      
    })

  }
  Limpiar(){
    this.ngOnInit();
  }

}
