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
  
  selectcur:VCpost[];
  selectcon:VCpost[];

  /// Variables //////////////77
  feachae:String
  feachac:String
  id:number
  vinc: VinculoCurso = new VinculoCurso()
  /// Objetos ///////0 ////////
  vincurso : VCpost[];
   a:number;
   b:number;
  lisConduc: Conductores[];
loadData: VinculoCurso[]= [];
vincursof: VinculoCurso = new VinculoCurso();
bbc:VCpost = new VCpost();
 p:number = 1;

  constructor(private service:VinculoCursoService , private ruter: Router) { }

  ngOnInit() {
    this.listar();
    this.listar1();
    this.selcur();
    this.selcon();
    
  }
  listar1(){
    this.service.getVCursos().subscribe( (data)=>{
      
    this.cur=data["p_cursor2"];

    })
  }
  
  listar(){
    this.service.getVCursos().subscribe( (data)=>{

      this.vincurso=data["p_cursor"];
 
    }
    );
    
    
  }
  selcur(){
    this.service.getSelCur().subscribe((data)=>{
      this.selectcur=data["p_cursor"];
    })
  }
  selcon(){
    this.service.getSelCon().subscribe((data)=>{
      this.selectcon=data["p_cursor"];
    })
  }
  getConductor() {
    
    this.service.getNombreConductor().subscribe(
      (data) => {
        this.con = data['p_conductor'];
   
      }
    );
  }
  crearvinculo(){

  
 
    this.service.createVCurso(this.vinc).subscribe(data =>{
        
      this.listar();
      Swal.fire(
      'Creado!',
      'El vinculo fue registrado con exito',
      'success'
    )
    });

    
  }
  
  upt(vinculo:VinculoCurso ){
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
        var x = vinculo.idcurso;
        var y = vinculo.idconductor;  
    
        this.service.deleteVCursos(vinculo).subscribe(data => {
          this.vincurso = this.vincurso.filter(req=>req!==this.vinc)
          this.listar()
        });
        Swal.fire(
          'Eliminado!',
          'El vinculo ha sido eliminado',
          'success'
        )
      }
   
    }

    )  
  }
  loadPersona(vicurso: VinculoCurso): void {
  
    this.a = vicurso.idconductor;
   
    this.b = vicurso.idcurso;
    this.service.getId(vicurso.idcurso,vicurso.idconductor).subscribe((data) => {
      this.loadData = data['P_CURSOR'];
   
    })
  }

  Actualizar(vnc: VinculoCurso) {

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
         this.service.editVCurso(this.b,this.a, vnc).subscribe((data) => {
      this.vinc = data;

      this.ngOnInit();
    })
        Swal.fire(
          'Eliminado!',
          'El vinculo ha sido eliminado',
          'success'
        )
      }
   
    }

    ) 
  }
  Limpiar(){
    this.ngOnInit();
    (<HTMLInputElement>document.getElementById("buscar1")).value = "";
    (<HTMLInputElement>document.getElementById("caja_estado")).value = "Seleccione Estado";

  }
  getname(c:VCpost) {
    var x = this.bbc.nombrecurso;
    this.service.getName(x).subscribe(
      (data) => {
        this.vincurso = data['P_CURSOR'];
        
      }
    );
  }


}
