import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-userop',
  templateUrl: './agregar-userop.component.html',
  styleUrls: ['./agregar-userop.component.css']
})
export class AgregarUseropComponent implements OnInit {

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
  }
  atras(){
    this.router.navigate(["home/userop"]);
  }
}
