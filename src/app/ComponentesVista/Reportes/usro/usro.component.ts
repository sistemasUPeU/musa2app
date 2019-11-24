import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { UserRolR } from 'src/app/Modelo/UserRol';

@Component({
  selector: 'app-usro',
  templateUrl: './usro.component.html',
  styleUrls: ['./usro.component.css']
})
export class UsroComponent implements OnInit {
  listarur:UserRolR[];
  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.service.getUR().subscribe(
      (data) => {
        this.listarur = data['P_CURSOR'];
        console.log(this.listarur)
      }
    );
  }

}
