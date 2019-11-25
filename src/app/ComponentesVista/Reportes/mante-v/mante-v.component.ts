import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { MantVal } from 'src/app/Modelo/MantVal';

@Component({
  selector: 'app-mante-v',
  templateUrl: './mante-v.component.html',
  styleUrls: ['./mante-v.component.css']
})
export class ManteVComponent implements OnInit {
  listarmantv:MantVal[];
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.service.getMantv().subscribe(
      (data) => {
        this.listarmantv = data['P_CURSOR'];
        console.log(this.listarmantv)
      }
    );
  }

}
