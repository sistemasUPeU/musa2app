import { Component, OnInit } from '@angular/core';
import { TarjetacService } from 'src/app/service/tarjetac.service';
import { Tarjetac } from 'src/app/Modelo/Tarjetac';
import { Vehiculosc } from 'src/app/Modelo/Vehiculos';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-tarjetac',
  templateUrl: './tarjetac.component.html',
  styleUrls: ['./tarjetac.component.css']
})
export class TarjetacComponent implements OnInit {
  vehiculos:Vehiculosc[]=[]
  vehiculo:Vehiculosc=new Vehiculosc();
  vehicu:Vehiculosc=new Vehiculosc();
  tarjetac :Tarjetac=new Tarjetac();
  tarj:Tarjetac=new Tarjetac();
  tarjs:Tarjetac=new Tarjetac();
  t : Tarjetac=new Tarjetac();


  tarjetacs: Tarjetac[] = []

  constructor(private tarjetacService:TarjetacService) { }
  
  ngOnInit() {
    
    this.tarjetacService.listarestado(1).subscribe((data)=>{
      this.tarjetacs=data['p_tarjetac'];
      
    })
  }
  buscarp(){
    this.tarjetacService.buscarpadron(this.vehicu.nropadron).subscribe((data)=>{
      this.vehiculos=data["P_CURSOR_NROPADRON"];
      console.log(data);
      (<HTMLInputElement>document.getElementById("bus")).value = "";
    })

  }
  getveh(){
    this.tarjetacService.getVehiculos().subscribe((data)=>{
      this.vehiculos=data["P_CURSOR"];
      console.log(this.vehiculos)
    })
  }
  Add(nro:number){

    (<HTMLInputElement>document.getElementById("hola")).value =""+nro;
    console.log(nro);
    (<HTMLInputElement>document.getElementById("hola")).disabled=true;
    this.tarjetac.idvehiculo=nro;

  }
  creartarjetac(){
    this.tarjetacService.creartarjeta(this.tarjetac).subscribe(
      (data) =>{ 
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Registrado Correctamente',
          showConfirmButton: false,
          timer: 1500
        })
        this.ngOnInit();
       }
    );
  }
  Eliminar(tarjetac:Tarjetac){
    Swal.fire({
      title: 'Esta seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Elminar!'
    }).then((result) => {
      if (result.value) {
        this.tarjetacService.eliminartarjeta(tarjetac.idtarjetac).subscribe((data)=>{
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
  Editar(tarjeta:Tarjetac){
    Swal.fire({
      title: 'Esta seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Modificar!'
    }).then((result) => {
      if (result.value) {
        
        this.tarjetacService.modificartarjeta(tarjeta).subscribe((data)=>{
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



