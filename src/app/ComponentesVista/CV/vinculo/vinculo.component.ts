import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vinculos } from 'src/app/Modelo/Vinculos';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-vinculo',
  templateUrl: './vinculo.component.html',
  styleUrls: ['./vinculo.component.css']
})
export class VinculoComponent implements OnInit {
  vinculo:Vinculos;
  listavinculos:Vinculos[] = [];
  constructor(private service: ServiceService, private router: Router) { }
  tipo: number;
  ngOnInit() {
    this.tipo=1
    this.service.getVinculo(this.tipo).subscribe(
      (data) => {
        this.listavinculos = data['P_CUR_VINCULOS']
        console.log(this.listavinculos);
      }
      );
  }

}