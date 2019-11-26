import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VinculoCursoService } from 'src/app/service/vinculo-curso.service';
import { VinculoCurso,VCpost,con,cur } from 'src/app/Modelo/VinculoCurso';
import Swal from 'sweetalert2';
import { Conductores } from 'src/app/Modelo/Conductores';
@Component({
  selector: 'app-vinculo-curso',
  templateUrl: './vinculo-curso.component.html',
  styleUrls: ['./vinculo-curso.component.css']
})
export class VinculoCursoComponent implements OnInit {
  
  con:con = new con()
  cur:cur = new cur()
  

  /// Variables //////////////77
  feachae:String
  feachac:String
  id:number
  vinc: VinculoCurso = new VinculoCurso()
  /// Objetos ///////0 ////////
  vincurso : VCpost[];
  lisConduc: Conductores[];

  /// Arreglos /////////////7
  constructor(private service:VinculoCursoService , private ruter: Router) { }

  ngOnInit() {
    this.listar();
    this.listar1();
    
  }
  listar1(){
    this.service.getVCursos().subscribe( (data)=>{
      console.log(data)
    this.cur=data["p_cursor2"];
    console.log(this.cur)
    })
  }
  
  listar(){
    this.service.getVCursos().subscribe( (data)=>{
      console.log(data)
      this.vincurso=data["p_cursor"];
      console.log(this.vincurso + "hi")
    }
    );
    
  }
  getConductor() {
    
    this.service.getNombreConductor().subscribe(
      (data) => {
        this.con = data['p_conductor'];
        console.log(this.con)
      }
    );
  }
  crear(){
    /*console.log(this.vincurso)
    var fecemi = this.vincurso.fechaemision.split("-")
    var fecadu = this.vincurso.fechacaducidad.split("-")
    this.vincurso.fechaemision=fecemi[2]+"-"+fecemi[1]+"-"+fecemi[0]
    this.vincurso.fechacaducidad=fecadu[2]+"-"+fecadu[1]+"-"+fecadu[0]
    */

    this.service.createVCurso(this.vinc).subscribe(data =>{
        console.log(data)
      this.listar();
      Swal.fire(
      'Creado!',
      'El vinculo fue registrado con exito',
      'success'
    )
    });

    
  }
  
  upt(x:number,y:number ){
    /*this.vincurso.idcursos=x;
    this.vincurso.idconductor=y;
    console.log(this.vincurso)
    this.service.uptVCursos(this.vincurso).subscribe(data => {
  
      this.listar()
      Swal.fire(
        'Eliminado!',
        'El Vinculo ha sido Eliminado',
        'success'
      )
      
    }
    );
    
   
    */
  }
  /*
  read(x:number,y:number){
    localStorage.setItem("curso",x.toString())
    localStorage.setItem("conductor",y.toString())
    var fecemi;
    var fecadu;
    let a=  vincurso.fechaemision;
    this.service.readVcurso(x,y).subscribe(data =>{
      this.vincurso=data["P_CURSOR"][0];
      fecemi = a.split("-")      
      fecadu = this.vincurso.fechacaducidad.split("-")
      this.vincurso.fechaemision=fecemi[2]+"
      -"+fecemi[1]+"-"+fecemi[0]
      this.vincurso.fechacaducidad=fecadu[2]+"-"+fecadu[1]+"-"+fecadu[0]
      console.log(this.vincurso)
    })
  }*/
  edit(vincucur:VCpost){
    console.log();
    //cursos.fechainicio = Date.parse(this.feachai);
    vincucur.idcurso=this.id;
    let cruso = Number(localStorage.getItem("curso"));
    let cronductor = Number(localStorage.getItem("conductor"));
    console.log(vincucur)
    
    this.service.editVCurso(vincucur,cruso,cronductor).subscribe(data => {

    this.listar();
    });
         Swal.fire(
            'Editado!',
            'El Curso ha sido Editado',
            'success'
          )
  
  }



}
