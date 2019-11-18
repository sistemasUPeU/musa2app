import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
      
  }

  Modo(){   
    localStorage.setItem("tipo",'3');
    this.router.navigate(['/home/registrarven']);
   }
}
