import { Component, OnInit, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Vinculos, Vinculo, Vinupd } from 'src/app/Modelo/Vinculos';
import { ServiceService } from 'src/app/service/service.service';
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';

@Component({
  selector: 'app-vinculo',
  templateUrl: './vinculo.component.html',
  styleUrls: ['./vinculo.component.css']
})
export class VinculoComponent implements OnInit {
  vinupd: Vinupd;
  vinculo: Vinculo;
  listavinculos:Vinculos[] = [];

  vinculos: Vinculos = new Vinculos();
  constructor(private service: ServiceService, private router: Router) { }
  tipo: number;
  ngOnInit() {
    this.tipo=3
    this.service.getVinculo(this.tipo).subscribe(
      (data) => {
        this.listavinculos = data['P_CUR_VINCULOS']
        console.log(this.listavinculos);  
      }
      );
  }
  valor(tipo2:number,id:number){
    console.log(tipo2);
    console.log(id);
    alert("TIPO: "+tipo2)
    if (id==1) {
      localStorage.setItem("idvinculo",id.toString());
    } else {
      localStorage.setItem("idvinculo",(id-1).toString());
    }
    
    localStorage.setItem("tipo",tipo2.toString());
    this.router.navigate(['/home/vinculomod']);
  }
  Modo(){   
    localStorage.setItem("tipo",'3');
    this.router.navigate(['/home/vinculoopc']);
   }

   modificar2(listavinculos: Vinculos){
     this.service.uptEstadovin(listavinculos).subscribe(data => {
       console.log(this.listavinculos)
       alert("lo lograste")
       this.listavinculos
       this.router.navigate(['/home/vinculo'])
     })
   }
}
