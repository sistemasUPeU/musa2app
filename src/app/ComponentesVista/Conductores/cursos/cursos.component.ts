import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursosService } from 'src/app/service/cursos.service';
import { Cursos } from 'src/app/Modelo/Cursos';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
   cursos : Cursos[];
   curso:Cursos = new Cursos();
  
  constructor(private service:CursosService , private ruter: Router) { }

  ngOnInit() {
    this.listar();
  }
  listar(){
    this.service.getCursos().subscribe( (data)=>{

      this.cursos=data["P_CURSOR"];
      console.log(this.cursos)
    }
    );
    
  }

  upt(cur: Cursos){alert("Hola")
    this.service.uptCursos(cur).subscribe(data => {
      console.log(this.cursos)
      alert("Eliminado")
      this.listar()
    })
  }
  crear(cursos:Cursos){alert("SI CREAAAA")
    console.log(cursos.nombrecurso);
    this.service.createCurso(cursos).subscribe(data =>{
    alert("creado")

    })
  }
}
