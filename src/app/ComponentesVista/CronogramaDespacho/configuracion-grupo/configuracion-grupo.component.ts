import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';
import { Configuracion_Grupos } from 'src/app/Modelo/Configuracion_Grupos';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.configuracion.idparadero=0;
  }
  getRolesN(config:Configuracion_Grupos) {
    let c=this.configuracion.idparadero;
    //alert(c);
    this.service.getConfiP(c).subscribe(
      (data) => {
        this.listarconfig = data['P_CURSOR'];
        console.log(this.listarconfig)
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
    console.log(this.configuracion);
    console.log(c)
        this.service.createConfi(this.configuracion).subscribe(data=>{
     alert(">>>> REGISTRO GUARDADO <<<<");
   })
  }

  LoadConfiUNO() {
    this.service.getConfiUNO().subscribe(
      (data) => {
        this.loadCU = data['P_CURSOR'];
        console.log(this.loadCU)
      }
    );
  }

  LoadConfiDOS() {
    this.service.getConfiDOS().subscribe(
      (data) => {
        this.loadCD = data['P_CURSOR'];
        console.log(this.loadCD)
      }
    );
  }

  ActualizarUNO(uno: Configuracion_Grupos) {
    uno.usermodify="funca";
    this.service.createUNO(uno).subscribe(data=>{
      alert(">>>> REGISTRO GUARDADO <<<<");
      this.router.navigate(["home/configuraciongrupo"]);
    })
  }

  ActualizarDOS(dos: Configuracion_Grupos) {
    dos.usermodify="funca";
    this.service.createDOS(dos).subscribe(data=>{
      alert(">>>> REGISTRO GUARDADO <<<<");
      this.router.navigate(["home/configuraciongrupo"]);
    })
  }

}
