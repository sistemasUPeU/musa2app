import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css']
})
export class OpcionesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  user(): void {
    this.router.navigateByUrl('/opciones');
  }
}
