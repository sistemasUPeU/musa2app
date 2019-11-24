import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { PedidosReg } from 'src/app/Modelo/PedidosReg';

@Component({
  selector: 'app-pedi-re',
  templateUrl: './pedi-re.component.html',
  styleUrls: ['./pedi-re.component.css']
})
export class PediReComponent implements OnInit {
  listarpedr:PedidosReg[];
  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.service.getPedidosR().subscribe(
      (data) => {
        this.listarpedr = data['P_CURSOR'];
        console.log(this.listarpedr)
      }
    );
  }

}
