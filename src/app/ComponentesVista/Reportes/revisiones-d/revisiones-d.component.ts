import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { RevDiarias } from 'src/app/Modelo/RevDiarias';

@Component({
  selector: 'app-revisiones-d',
  templateUrl: './revisiones-d.component.html',
  styleUrls: ['./revisiones-d.component.css']
})
export class RevisionesDComponent implements OnInit {
  listarrevd:RevDiarias[];
  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.service.getRevd().subscribe(
      (data) => {
        this.listarrevd = data['P_CURSOR'];
        console.log(this.listarrevd)
      }
    );
  }

}
