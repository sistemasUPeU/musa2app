import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/Modelo/Roles';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {
  rol: Roles;
  listaroles:Roles[] = [];
  constructor(private service:ServiceService, private router:Router) { }
  ngOnInit() {
    this.getAllRoles();
  }
  getAllRoles() {
    this.service.getAllRoles().subscribe(
      (data) => {
        this.listaroles = data['p_cur_rol'];
        console.log(this.listaroles)
      }
    );
  }
}
