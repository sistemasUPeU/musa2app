import { Component, OnInit, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Vinculos } from 'src/app/Modelo/Vinculos';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-vinculo',
  templateUrl: './vinculo.component.html',
  styleUrls: ['./vinculo.component.css']
})
export class VinculoComponent implements OnInit {

  
  vinculos:Vinculos;
  listavinculos:Vinculos[] = [];
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
    localStorage.setItem("tipo",id.toString());
    localStorage.setItem("tipo",tipo2.toString());
    this.router.navigate(['/home/vinculoopc']);
  }
  Modo(){   
    localStorage.setItem("tipo",'3');
    this.router.navigate(['/home/vinculoopc']);
   }


}
