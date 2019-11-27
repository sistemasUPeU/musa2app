import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Conductores } from 'src/app/Modelo/Conductores';
import { Vehiculos } from 'src/app/Modelo/Vehiculos';
import { Propietarios } from 'src/app/Modelo/Propietarios';
import { Vinculo, VincuRequi, VincuRequis } from 'src/app/Modelo/Vinculos';
import { Requisitos } from 'src/app/Modelo/Requisitos';
import * as moment from 'moment';
import { empleado } from 'src/app/Modelo/empleados';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vinculomod',
  templateUrl: './vinculomod.component.html',
  styleUrls: ['./vinculomod.component.css']
})
export class VinculomodComponent implements OnInit {
  parts : String[];
  mostrarpropietario: boolean;
  mostrarconductor: boolean;
  id:number;
  fechai:String;
  fechaf:String;
  cont:number
  constructor(private router: Router, private service: ServiceService, private activatedRoute:ActivatedRoute) { }
  
  ngOnInit() {
    this.cont=0
    this.id=Number(localStorage.getItem("idvinculo"));
    this.getConductor();
    this.getPropietario();
    this.getVehiculo();
    this.titulo="MODIFICAR VINCULO";
    this.tipo = Number(localStorage.getItem("tipo"));
    this.Tipo();
    console.log(this.tipo);
    this.read(this.id)
  }

  ///// Arraysss

  vinculos:Vinculo[];
  vincurequi: VincuRequis[]; 
  lisRequisitos: Requisitos[];
  lisConduc: Conductores[];
  lisVehic: Vehiculos[];
  lisPropie: Propietarios[];
  lisEmple: empleado[];
  ////// Objetosssss
  date_inicio : Date;

  ////// Variablesssssss   

  titulo = "";
  tipo:number;
  private foto : File;
  ///// Listar conductoressssssssss
  
  getConductor() {
    
    this.service.getNombreConductor().subscribe(
      (data) => {
        this.lisConduc = data['p_conductor'];
        console.log(this.lisConduc)
      }
    );
  }
  
  //////Listar Propietariosssssssss

  getPropietario() {
    this.service.getNombrePropietario().subscribe(
      (data) => {
        this.lisPropie = data['P_CURSOR'];
        console.log(this.lisPropie)
      }
    );
  }
  /////// Listar Empleados

  /*
  getempleado(){
    this.service.getNEmple().subscribe(
      (data) => {
        this.lisEmple = data
        console.log(this.lisEmple)
      }
    )
  }
  */
  //////// Listar Vehiculossssssss

  getVehiculo() {
    this.service.getNombreVeh().subscribe(
      (data) => {
        this.lisVehic = data['P_CUR_VEHICULOS'];
        console.log(this.lisVehic)
      }
    );
  } 

  ////////// Listar Requisitosssssss

  getRequisito(idvinculo: number) {
    this.service.getrequisitos_vinculo(+idvinculo).subscribe(
      (data) => {
        this.lisRequisitos = data['P_CUR_VINCULO_REQUISITO'];
        console.log(this.lisRequisitos)
        
      }
    );
  }

  //////////// Autoseleccion de Tipo Vinculo (desde la Vista Vinculo) 
/*
  Tipo2(){
    var v_tipo1=this.tipo;
    alert(this.tipo)
    if (v_tipo1 == 1) {
      this.titulo="MODIFICAR VINCULO CONDUCTOR";
      this.getRequisito(v_tipo1);
    (<HTMLElement>document.getElementById('forconductor')).style.display="block";
    (<HTMLElement>document.getElementById('forpropietario')).style.display="none";
    localStorage.setItem("tipo",'-1');
    }
    if (v_tipo1== 2) {
      this.titulo="MODIFICAR VINCULO PROPIETARIO";
      this.getRequisito(v_tipo1);
    (<HTMLElement>document.getElementById('forconductor')).style.display="none";
    (<HTMLElement>document.getElementById('forpropietario')).style.display="block";  
    localStorage.setItem("tipo",'-1');
    }
  }
*/
  ////// Seleccionar Tipo Vinculo para actualizar (desde la Vista Vinculo Modificar)

  Tipo(){
    /*var v_tipo=(<HTMLSelectElement>document.getElementById('tipo')).value;
    alert(v_tipo)*/
    if (this.tipo == 1) {
      this.titulo="MODIFICAR VINCULO CONDUCTOR";
      this.getRequisito(Number(this.id));
      
    }
    if (this.tipo== 2) {
      this.titulo="MODIFICAR VINCULO PROPIETARIO";
      this.getRequisito(Number(this.id));
    }
  }
  
  ///////// Llena datos a las cajassss 

   read(id: number){
     var fecha;
    this.service.getVinculoid(id).subscribe(
      (data) => {
        this.vinculos = data['P_CUR_VINCULOS'];
        this.fechai=this.convertir_fecha(String(this.vinculos[0].fechainicio))
        this.fechaf=this.convertir_fecha(String(this.vinculos[0].fechafin));
        console.log(this.vinculos)
      }
    );
   }
   convertir_fecha(string:String){
     this.parts = string.split("/");
     var fechaparsiada:String = this.parts[2]+"-"+this.parts[1]+"-"+this.parts[0];
     return fechaparsiada
   }
   //////// Modifica los datosssss

   modificar(){
     this.vinculos[0].fechainicio=String(this.fechai)
     this.vinculos[0].fechafin=String(this.fechaf)
     this.vinculos[0].idempleado=2
    this.service.uptVinculo(this.vinculos[0]).subscribe(
      (data) => {
        if(this.tipo == 1){
          this.router.navigate(['/home/vinculo']);
        }else{
          this.router.navigate(['/home/vinculopropietario']);
        }
        
      }
    );
   }
   alertaa(){
    Swal.fire({
      title: 'Seguro desea modificar?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        
        Swal.fire(
          'Vinculo Modificado!',
          'Your file has been modified.',
          'success'
        )
      }
      this.modificar();
    })
   }
   modifi_requis(idrequisito:number){
     this.service.uptrequisitos(this.id,idrequisito,this.foto).subscribe( (data) =>{
      alert("se actualizo")
    })
     /*let requi:VincuRequis
     requi.idvinculo=idvinculo
     requi.idrequisito=idrequisito
     /*alert("hola")
     console.log(requi)
    /*this.vincurequi[0].idvinculo = idvinculo
    this.vincurequi[0].idrequisito = idrequisito
    console.log(this.vincurequi)
    this.cont++*/
   }

   selecfoto(event){
      this.foto = event.target.files[0];
      console.log(this.foto)

   }
}
