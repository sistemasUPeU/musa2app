import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Observable } from 'rxjs';
import { Vinc, Vinculacion } from 'src/app/Modelo/Vinculos';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-vinculo',
  templateUrl: './vinculo.component.html',
  styleUrls: ['./vinculo.component.css']
})
export class VinculoComponent implements OnInit {
  tipovinculo: number;
  constructor(private service: ServiceService, private router: Router) { }
  vinculos$: Observable<Array<Vinc>>;
  tipo: number;
  ngOnInit() {
    //this.vinculos$ = this.service.getVinculo(this.tipo).pipe(map((apiVinculo: Vinculacion) => apiVinculo.vinc));

  }

}
