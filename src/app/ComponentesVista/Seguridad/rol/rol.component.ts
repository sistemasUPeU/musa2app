import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/Modelo/Roles';
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {
  rol: Roles;
  listaroles:Roles[];
  roles1:Roles=new Roles();
  role:Roles=new Roles();
  loadPersonaData: Roles[] = [];
  rolid:Roles[];
  rolf: Roles=new Roles();
  p_cur_rol: Roles =new Roles();
  sv=[];
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
  Limpiar(){
    this.getAllRoles();
    (<HTMLInputElement>document.getElementById("buscar1")).value = "";
    (<HTMLInputElement>document.getElementById("caja_estado")).value = "Seleccione Estado";

  }
  GuardarRol(){
    let c=this.roles1.nombre;
    alert(c);
    console.log(c)
        this.service.createRoles(c).subscribe(data=>{
     alert(">>>> REGISTRO GUARDADO <<<<");
     this.getAllRoles();
   })
  }

  VerificarRol(){
    var sv=this.roles1.nombre;
    let verificar = 0;
    this.listaroles.forEach(function(ef){
      console.log(ef.nombre);
      while (ef.nombre==sv) {
        alert("ya existe");
        verificar=1;
        this.router.navigate(["home/usuario"])
      }
    })
    alert(verificar);
      this.GuardarRol();
    
    //this.Save();
    //let arr=Cliente;
    //if (this.cliente.c_dni=="asd") {
      
   // }else{
   //   alert("HAS FRACASADO EFE")
   // }
  }


  getRolesN(roles:Roles) {
    let c=this.roles1.nom;
    alert(c);
    this.service.getRolesN(c).subscribe(
      (data) => {
        this.listaroles = data['p_cur_rol'];
        console.log(this.listaroles)
      }
    );
  }
  getRolesE(roles:Roles) {
    var hola=(<HTMLSelectElement>document.getElementById('caja_estado')).value;
    alert(hola);
    this.service.getRolesE(hola).subscribe(
      (data) => {
        this.listaroles = data['p_cur_rol'];
        console.log(this.listaroles)
      }
    );
  }
 EliminarRol(roles:Roles){
  let c=roles.idrol;
   alert(c);
  this.service.deleteRoles(roles).subscribe(data=>{
    alert(">>>> REGISTRO ELIMINADO <<<<");
    this.listaroles=this.listaroles.filter(r=>r!==roles);
    this.getAllRoles();

  })  
 }

//EditarRoles(roles:Roles):void{  
  //alert(roles.NOMBRE);
  //this.service.getRolesIdE(roles.IDROL).subscribe(data=>{
   // var d=roles.IDROL ;
    //alert(d);
  //})
//}
//ActualizarR(roles:Roles){
//this.service.updateRoles(roles).subscribe(data=>{
 //   alert("hola");  
  //   this.roles1=data;
   //  alert(data);
   // alert("modificado");
 //  })
//}


  //EditarR(c:number){
//this.service.getRolesIdE(c).subscribe((data)=>{
    //  this.role=data;
    //  console.log(data);
    //})
  //}
   ActualizarR(roles:Roles){
     alert(roles.idrol);
    alert(this.roles1.nombre);
    roles.nombre=this.roles1.nombre;
    alert(this.roles1.estado);
    roles.estado=this.roles1.estado;
    alert(roles);
    var id=37;
     this.service.updateRoles(id,roles).subscribe(data=>{
       this.role=data;
       alert(data);
     }) 
  }
  
//////////////
// ActualizarR(roles:Roles){
 // alert(this.roles1.NOMBRE);
 // alert(this.roles1.ESTADO);
// var id=37;
 //  this.service.updateRoles(id,roles).subscribe(data=>{
  //   this.role=data;
  //   alert(data);
  //  var l =id;
  // })
//}
//////////////////////////
  
  EditarR(id) {
    this.service.getRolesIdE(id).subscribe((res: Roles) => {
      alert(id);
      this.role = res;
      console.log(res);
    }); 

  }



  EditarRoles(roles:Roles):number{
    alert(roles.idrol);
    localStorage.setItem("IDROL",roles.idrol.toString());
    alert("vale");
    this.EditarR(roles.idrol);
    return roles.idrol;
  }
////////////////////// PRUEBA
    EditarL(roles:Roles):void{
      alert(roles.idrol);
      localStorage.setItem("IDROL",roles.idrol.toString());
      this.router.navigate(["home/prueba-editar"]);
    }
    loadPersona(roles: Roles): void {
      alert(roles.idrol);
  
      this.service.getPersonaId(roles.idrol).subscribe((data) => {
        this.loadPersonaData = data['p_cur_rol'];
      })
    }
    Actualizar(p_cur_rol: Roles) {
      alert(p_cur_rol.nombre);
      alert(p_cur_rol.estado);
      alert(p_cur_rol.idrol)
      this.service.updatePersona(p_cur_rol).subscribe((data) => {
        this.rolf = data;
        console.log(data);
        alert('Registro modificado correctamente...!');
        this.ngOnInit();
      })
    }

}
