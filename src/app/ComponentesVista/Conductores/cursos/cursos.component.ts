import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursosService } from 'src/app/service/cursos.service';
import { Cursos } from 'src/app/Modelo/Cursos';
import Swal from 'sweetalert2';

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
  c1: Cursos;
  constructor(private service:CursosService , private ruter: Router) { }
  p:number = 1;
  ngOnInit() {
    this.listar();
  }
  listar(){
    this.service.getCursos().subscribe( (data)=>{

      this.cursos=data["P_CURSOR"];
 
    }
    );
    
  }
  
  upt(curs :Cursos){
    Swal.fire({
      title: 'Estas seguro?',
      text: "Esta accion no se podra revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.service.uptCursos(curs).subscribe(response=>{
          this.cursos = this.cursos.filter(req=>req!==curs)
        });
        Swal.fire(
          'Eliminado!',
          'La accion ha sido eliminada',
          'success'
        )
      }
   
    }

    )  ;  
  
    
  }
  crear(cursos:Cursos){

    this.service.createCurso(cursos).subscribe(data =>{

      this.listar();
    });
    Swal.fire(
      'Creado!',
      'El curso fue registrado con exito',
      'success'
    )
  }
  read(id:number){

this.id=id;
this.service.readcurso(+id).subscribe(data =>{
  this.curs=data["P_CUR_CURSOS"][0];
  

})
}
edit(cursos:Cursos){
  Swal.fire({
    title: 'Estas seguro?',
    text: "El curso fue editado, Desea conservar los cambios ?!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, confirmar!'
  }).then((result) => {
    if (result.value) {
      cursos.idcursos=this.id;
     
      this.service.editCurso(cursos).subscribe(data => {
    
      this.listar();
      });
      Swal.fire(
        'Editado!',
        'El curso ha sido editado desea con exito',
        'success'
      )
    }
 
  }

  )  ;

}
Limpiar(){
  this.ngOnInit();
  (<HTMLInputElement>document.getElementById("buscar1")).value = "";
  (<HTMLInputElement>document.getElementById("caja_estado")).value = "Seleccione Estado";

}
getUsuarioN(cu:Cursos) {
  let c=this.curs.nombrecurso;
 
    this.service.getCursoN(c).subscribe(
      (data) => {
      this.cursos = data['P_CURSOR'];
      
      }
    );
  }

}
