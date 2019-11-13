import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userop',
  templateUrl: './userop.component.html',
  styleUrls: ['./userop.component.css']
})
export class UseropComponent implements OnInit {

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
  }
  Agregar(){
    this.router.navigate(["home/agregar-userop"])
  }
}
