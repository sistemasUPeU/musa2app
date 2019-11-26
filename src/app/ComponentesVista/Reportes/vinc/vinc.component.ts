import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { VinculoPropi } from 'src/app/Modelo/VinculoPropi';

@Component({
  selector: 'app-vinc',
  templateUrl: './vinc.component.html',
  styleUrls: ['./vinc.component.css']
})
export class VincComponent implements OnInit {
  listarv: VinculoPropi[];
  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.service.getVnc().subscribe(
      (data) => {
        this.listarv = data['P_CURSOR'];
        console.log(this.listarv)
      }
    );
  }

}
