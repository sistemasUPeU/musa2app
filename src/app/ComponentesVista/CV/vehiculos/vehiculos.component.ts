import { Component, OnInit } from '@angular/core';
import { Vehiculosc} from 'src/app/Modelo/Vehiculos';
import { Veh_categoria } from 'src/app/Modelo/Vehiculos';
import { Veh_marca } from 'src/app/Modelo/Vehiculos';
import { Veh_modelo } from 'src/app/Modelo/Vehiculos';
import { VehiculoService } from 'src/app/service/vehiculos.service';
import { Router , ActivatedRoute } from '@angular/router'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {
  idvehiculo:number;
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
  valor:any;
  vehs:Vehiculosc = new Vehiculosc();
  nropadron:any;
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
           this.valor = data['p_msgerror'];
           if(this.valor = data['p_msgerror']){
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Este dato ya se encuentra en la base de datos'
            })
           }else{
             Swal.fire(
             'Hecho!',
             'El vehiculo se ha registrado con éxito!',
             'success'
    )
           }
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
   delete(id:number){
    Swal.fire({
      title: 'Estas seguro de querer cambiar el estado?',
      text: "Una vez hecho ya no hay vuelta atrás!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cambialo!'
    }).then((result) => {
      if (result.value) {
        this.vehi_borrar.idvehiculo=id;
     this.vehiculosservice.deleteVehiculos(id).subscribe(   
        data => {
           this.getVehiculos();
        }
      );
        Swal.fire(
          'Cambiado!',
          'El estado del vehiculo se ha cambiado con exito',
          'success'
        )
      }
    })
   } 
   getVehiculosId(id:number){
     this.idvehiculo = id;
     console.log(id);
     this.vehiculosservice.getVehiculosId(+id).subscribe(
       (data) => {
         this.veh = data['P_CUR_VEHICULOS'];
         console.log(this.veh);
       }
     );
   }
   modificarVehiculos(vehiculo:Vehiculosc){
       vehiculo.idvehiculo = this.idvehiculo;
       console.log(vehiculo);
       this.vehiculosservice.updateVehiculos(vehiculo).subscribe(
         (data) => {
          this.router.navigate([`home/vehiculos`]);
          this.getVehiculos();
         }
       );
       Swal.fire(
        'Cambiado!',
        'El  vehiculo se ha modificado con exito',
        'success'
      )
   } 
   buscarprueba(){
     
   }
   buscarNroPadron(){
    console.log(this.nropadron);
     this.vehiculosservice.buscarNroPadron(parseInt(this.nropadron)).subscribe(
       (data) => {
        // console.log(this.vehiculo.nropadron);
         console.log(data);
         this.vehiculos = data['P_CURSOR_NROPADRON'];
       }
     );
   }
   limpiar(){
     this.getVehiculos();
   }
}
