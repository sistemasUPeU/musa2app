import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { ManTReg } from 'src/app/Modelo/MantReg';

@Component({
  selector: 'app-mante',
  templateUrl: './mante.component.html',
  styleUrls: ['./mante.component.css']
})
export class ManteComponent implements OnInit {
  listarmant: ManTReg[];
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.service.getMantr().subscribe(
      (data) => {
        this.listarmant = data['P_CURSOR'];
        console.log(this.listarmant)
      }
    );
  }

}
