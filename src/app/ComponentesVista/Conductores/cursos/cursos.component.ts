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
   curs:Cursos = new Cursos();
   feachai:String
   feachaf:String
   id:number
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
      this.listar();
    })
  }
  read(id:number){alert("Entra pa editar gaa")
console.log(id);
this.id=id;
this.service.readcurso(+id).subscribe(data =>{
  this.curs=data["P_CUR_CURSOS"][0];
  
  this.feachaf = (String(this.curs.fechafin)).substr(0,10)
  this.feachai = (String(this.curs.fechainicio)).substr(0,10)
  this.curs.fechafin=new Date(String(this.feachaf))
  this.curs.fechainicio=new Date(String(this.feachai))
  console.log(this.feachaf,this.feachai)
})
}
edit(cursos:Cursos){
  console.log();
  //cursos.fechainicio = Date.parse(this.feachai);
  cursos.idcursos=this.id;
  console.log(cursos)
  this.service.editCurso(cursos).subscribe(data => {
  alert("SI EDITO CTMRE")
  this.listar();
  })

}
}
