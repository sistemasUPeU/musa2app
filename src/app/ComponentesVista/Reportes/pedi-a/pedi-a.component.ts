import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { PedidosReg } from 'src/app/Modelo/PedidosReg';
import { PediAproR } from 'src/app/Modelo/PediAproR';

@Component({
  selector: 'app-pedi-a',
  templateUrl: './pedi-a.component.html',
  styleUrls: ['./pedi-a.component.css']
})
export class PediAComponent implements OnInit {
  listarpedia:PediAproR[];
  constructor(private service:ServiceService) { }

  ngOnInit() {
      this.service.getPedidosA().subscribe(
        (data) => {
          this.listarpedia = data['P_CURSOR'];
          console.log(this.listarpedia)
        }
      );
  }

}
