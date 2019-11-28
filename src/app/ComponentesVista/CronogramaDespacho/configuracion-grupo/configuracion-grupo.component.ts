import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';
import { Configuracion_Grupos } from 'src/app/Modelo/Configuracion_Grupos';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-configuracion-grupo',
  templateUrl: './configuracion-grupo.component.html',
  styleUrls: ['./configuracion-grupo.component.css']
})
export class ConfiguracionGrupoComponent implements OnInit {
  confi: Configuracion_Grupos;
  listarconfig:Configuracion_Grupos[];
  cuno: Configuracion_Grupos=new Configuracion_Grupos();
  
  loadCU: Configuracion_Grupos[] = [];
  loadCD: Configuracion_Grupos[] = [];
  configuracion: Configuracion_Grupos = new Configuracion_Grupos();
  
ah:number=1;
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.configuracion.idparadero=0;
  }
  getRolesN(config:Configuracion_Grupos) {
    let c=this.configuracion.idparadero;
  
    this.service.getConfiP(c).subscribe(
      (data) => {
        this.listarconfig = data['P_CURSOR'];
     
      }
    );
    if (c==1) {
      (<HTMLInputElement>document.getElementById("modificar")).style.display = "block";
      (<HTMLInputElement>document.getElementById("modificar1")).style.display = "none";
    }else if (c==2) {
      (<HTMLInputElement>document.getElementById("modificar1")).style.display = "block";
      (<HTMLInputElement>document.getElementById("modificar")).style.display = "none";
    }
  }
  SaveConfi(){
    let c=this.configuracion.intervalo;
    this.configuracion.usercreate="Christian";

        this.service.createConfi(this.configuracion).subscribe(data=>{
          Swal.fire(
            'Creada!',
            'La configuracion ha sido creada',
            'success'
          )
   })
  }

  LoadConfiUNO() {
    this.service.getConfiUNO().subscribe(
      (data) => {
        this.loadCU = data['P_CURSOR'];
        
      }
    );
  }

  LoadConfiDOS() {
    this.service.getConfiDOS().subscribe(
      (data) => {
        this.loadCD = data['P_CURSOR'];
     
      }
    );
  }

  ActualizarUNO(uno: Configuracion_Grupos) {
    Swal.fire({
      title: 'Estas seguro?',
      text: "Esta accion no se podra revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, modificar!'
    }).then((result) => {
      if (result.value) {
      uno.usermodify="funca";
    this.service.createUNO(uno).subscribe(data=>{
    
      this.router.navigate(["home/configuraciongrupo"]);
    })
        Swal.fire(
          'Modificado!',
          'La configuracion ha sido modificada',
          'success'
        )
      }
    })
    
  }

  ActualizarDOS(dos: Configuracion_Grupos) {
    Swal.fire({
      title: 'Estas seguro?',
      text: "Esta accion no se podra revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, modificar!'
    }).then((result) => {
      if (result.value) {
        dos.usermodify="funca";
    this.service.createDOS(dos).subscribe(data=>{

      this.router.navigate(["home/configuraciongrupo"]);
    })
        Swal.fire(
          'Modificado!',
          'La configuracion ha sido modificada',
          'success'
        )
      }
    })
  }

}
