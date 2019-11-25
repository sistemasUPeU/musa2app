import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Propi } from 'src/app/Modelo/Propi';

@Component({
  selector: 'app-propi',
  templateUrl: './propi.component.html',
  styleUrls: ['./propi.component.css']
})
export class PropiComponent implements OnInit {
  listarpro:Propi[];
  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.service.getPro().subscribe(
      (data) => {
        this.listarpro = data['P_CURSOR'];
        console.log(this.listarpro)
      }
    );
  }

}
