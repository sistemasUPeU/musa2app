import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { PedidoEs } from 'src/app/Modelo/PedidoEsR';

@Component({
  selector: 'app-esta-pe',
  templateUrl: './esta-pe.component.html',
  styleUrls: ['./esta-pe.component.css']
})
export class EstaPeComponent implements OnInit {
  listestp: PedidoEs[];
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.service.getPedidosE().subscribe(
      (data) => {
        this.listestp = data['P_CURSOR'];
        console.log(this.listestp)
      }
    );
  }

}
