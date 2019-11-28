import { Component, OnInit } from '@angular/core';
import { Soat } from 'src/app/Modelo/Soat';
import { SoatService } from 'src/app/service/soat.service';
import { Vehiculos, Vehiculosc } from 'src/app/Modelo/Vehiculos';
import Swal from 'sweetalert2' 
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
  vehiculos:Vehiculosc[]=[]
  vehiculo:Vehiculosc=new Vehiculosc();
  vehicu:Vehiculosc=new Vehiculosc();
  soats: Soat[] = []

  constructor(private soatservice:SoatService) { }
  
  ngOnInit() {
    this.soatservice.listarestado(1).subscribe((data)=>{
      this.soats=data['P_CURSOR'];
   
    });
  }
  CREARSOAT(){
    this.soatservice.crearsoat(this.soat).subscribe(
      (data) =>{ 
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Registrado Correctamente',
          showConfirmButton: false,
          timer: 1500
        })
        this.ngOnInit(); }

    );
  }
  Eliminar(soat:Soat){
    Swal.fire({
      title: 'Esta seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Elminar!'
    }).then((result) => {
      if (result.value) {
        this.soatservice.eliminarsoat(soat.idsoat).subscribe((data)=>{
          Swal.fire(
    
            'Eliminado  con exito!',
            
          )
          
          this.ngOnInit();
    
        });
        }else{
        this.ngOnInit();
      }
    })
    

  }
  Editar(soat:Soat){
    Swal.fire({
      title: 'Esta seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Modificar!'
    }).then((result) => {
      if (result.value) {
        console.log(soat)
        this.soatservice.modificarsoat(soat).subscribe((data)=>{
          Swal.fire(

            'Modificado  con exito!',
            
          )
          this.ngOnInit();
    
        });
    
       
      }else{
        this.ngOnInit();
      }
    })
  
      
     
   
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
      (<HTMLInputElement>document.getElementById("buscar1")).value = "";
      
      
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

  getveh(){
    this.soatservice.getVehiculos().subscribe((data)=>{
      this.vehiculos=data["P_CURSOR"];
      console.log(this.vehiculos)
    })
  }
  Add(nro:number){

    (<HTMLInputElement>document.getElementById("user1")).value =""+nro;
    console.log(nro);
    (<HTMLInputElement>document.getElementById("user1")).disabled=true;
    this.soat.idvehiculo=nro;

  }
  buscarp(){
    this.soatservice.buscarpadron(this.vehicu.nropadron).subscribe((data)=>{
      this.vehiculos=data["P_CURSOR_NROPADRON"];
      console.log(data);
      (<HTMLInputElement>document.getElementById("bus")).value = "";
    })

  }
}
