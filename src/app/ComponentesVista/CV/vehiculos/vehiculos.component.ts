import { Component, OnInit } from '@angular/core';
import { Vehiculosc} from 'src/app/Modelo/Vehiculos';
import { Veh_categoria } from 'src/app/Modelo/Vehiculos';
import { Veh_marca } from 'src/app/Modelo/Vehiculos';
import { Veh_modelo } from 'src/app/Modelo/Vehiculos';
import { VehiculoService } from 'src/app/service/vehiculos.service';
import { Router , ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {
  vehiculo:Vehiculosc = new Vehiculosc();
  vehiculos:Vehiculosc[]= [];
  veh_modelo:Veh_modelo = new Veh_modelo();
  veh_modelos:Veh_modelo[] = [];
  veh_marca:Veh_marca = new Veh_marca();
  veh_marcas:Veh_marca[] = [];
  veh_categoria: Veh_categoria = new Veh_categoria();
  veh_categorias:Veh_categoria[] = [];
  veh:Vehiculosc[] = [];
  vehi_borrar:Vehiculosc = new Vehiculosc;
  constructor(private vehiculosservice:VehiculoService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.getVehiculos();
    this.getVehModelo();
    this.getVehMarca();
    this.getVehCategoria();
  }

  getVehiculos(){
    this.vehiculosservice.getVehiculos().subscribe(
      (data) => {
        this.vehiculos = data['P_CURSOR'];
        console.log(this.vehiculos);
      }
    );
  }

  crearVehiculos(){
     this.vehiculosservice.crearVehiculos(this.vehiculo).subscribe(
       (data) => {
        this.router.navigate([`home/vehiculos`]);
           console.log(this.vehiculo);
           this.getVehiculos();
       }
     );
  }

  getVehModelo(){
     this.vehiculosservice.getVehModelo().subscribe(
       (data) => {
         this.veh_modelos = data['P_CUR_MODELO'];
         console.log(this.veh_modelos);
       }
     );
  }

  getVehMarca(){
     this.vehiculosservice.getVehMarca().subscribe(
       (data) => {
          this.veh_marcas = data['P_CUR_MARCA_ID'];
          console.log(this.veh_marcas);
       }
     );
  }

  getVehCategoria(){
     this.vehiculosservice.getVehCategoria().subscribe(
       (data) => {
         this.veh_categorias = data['P_CUR_CATEGORIA'];
         console.log(this.veh_categorias);
       }
     );
  }
   delete(veh:number){
     alert("Dime que estas orgulloso chifu");
     this.vehi_borrar.idvehiculo=veh;
     this.vehiculosservice.deleteVehiculos(this.vehi_borrar).subscribe(   
        data => {
          alert("LLEGA")
           console.log('entro al metodo');
           alert(this.vehiculo);
           this.getVehiculos();
        }
      );
   } 
}
