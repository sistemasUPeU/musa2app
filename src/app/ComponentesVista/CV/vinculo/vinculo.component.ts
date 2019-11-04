import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import {  Vin, ApiCurVinculo } from 'src/app/Modelo/CurVinculo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vinculo',
  templateUrl: './vinculo.component.html',
  styleUrls: ['./vinculo.component.css']
})
export class VinculoComponent implements OnInit {

  constructor(private serviceService: ServiceService, private router: Router) { }
  vinculos$: Observable<Array<Vin>>;
  tipovinculo: number;
  ngOnInit() {
    this.vinculos$ = this.serviceService.getVinculo(this.tipovinculo)
    .pipe(map((apiVinculo: ApiCurVinculo) => apiVinculo.vin));
  }
}
