import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { OpcRolR } from 'src/app/Modelo/OpcRolR';

@Component({
  selector: 'app-opro',
  templateUrl: './opro.component.html',
  styleUrls: ['./opro.component.css']
})
export class OproComponent implements OnInit {
  listarOpr: OpcRolR[];
  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.service.getOR().subscribe(
      (data) => {
        this.listarOpr = data['P_CURSOR'];
        console.log(this.listarOpr)
      }
    );
  }

}
