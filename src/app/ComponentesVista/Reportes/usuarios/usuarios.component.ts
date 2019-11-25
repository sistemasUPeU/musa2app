import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { UsuarioR } from 'src/app/Modelo/Usuario_Reportes';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  listaru: UsuarioR[];
  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.service.getUsi().subscribe(
      (data) => {
        this.listaru = data['P_CURSOR'];
        console.log(this.listaru)
      }
    );
  }

}
