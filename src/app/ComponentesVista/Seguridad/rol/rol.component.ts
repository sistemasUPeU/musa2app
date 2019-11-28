import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/Modelo/Roles';
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
  ah:number=1;
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
    //alert(c);
    //console.log(c)
        this.service.createRoles(c).subscribe(data=>{
          Swal.fire({
            title: "Registro Guardado!",
            text: "Se Registro el Nuevo Rol!",
            icon: "success",
            button: "OK",
          });
     this.getAllRoles();
   })
  }

  VerificarRol(){
    var sv=this.roles1.nombre;
    let verificar = 0;
    this.listaroles.forEach(function(ef){
      while (ef.nombre==sv) {
        Swal.fire({
          title: "Rol Repetido!",
          text: "Ingrese otro rol con un nombre distinto",
          icon: "warning",
          button: "OK",
        });
        verificar=1;
        this.router.navigate(["home/usuario"])
      }
    })

      this.GuardarRol();
    

  }


  getRolesN(roles:Roles) {
    let c=this.roles1.nom;
    //alert(c);
    this.service.getRolesN(c).subscribe(
      (data) => {
        this.listaroles = data['p_cur_rol'];
        console.log(this.listaroles)
      }
    );
  }
  getRolesE(roles:Roles) {
    var hola=(<HTMLSelectElement>document.getElementById('caja_estado')).value;

    this.service.getRolesE(hola).subscribe(
      (data) => {
        this.listaroles = data['p_cur_rol'];
  
      }
    );
  }
 EliminarRol(roles:Roles){
 
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
        let c=roles.idrol;

        this.service.deleteRoles(roles).subscribe(data=>{
          this.listaroles=this.listaroles.filter(r=>r!==roles);
          this.getAllRoles();
        });
        Swal.fire(
          'Eliminado!',
          'La accion ha sido eliminada',
          'success'
        )
      }
    })

 }


   ActualizarR(roles:Roles){
  
    roles.nombre=this.roles1.nombre;
   
    roles.estado=this.roles1.estado;
  
    var id=37;
     this.service.updateRoles(id,roles).subscribe(data=>{
       this.role=data;
   
     }) 
  }
  

  EditarR(id) {
    this.service.getRolesIdE(id).subscribe((res: Roles) => {
 
      this.role = res;
    
    }); 

  }



  EditarRoles(roles:Roles):number{
    alert(roles.idrol);
    localStorage.setItem("IDROL",roles.idrol.toString());
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
     // alert(roles.idrol);
  
      this.service.getPersonaId(roles.idrol).subscribe((data) => {
        this.loadPersonaData = data['p_cur_rol'];
      })
    }
    Actualizar(p_cur_rol: Roles) {
      //alert(p_cur_rol.nombre);
      ///}alert(p_cur_rol.estado);
     // alert(p_cur_rol.idrol)
     Swal.fire({
      title: 'Estas seguro?',
      text: "Esta accion no se podra revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, modificar!'
    }).then((result) => {
      if (result.value) {
      

        this.service.updatePersona(p_cur_rol).subscribe((data) => {
          this.rolf = data;
          //console.log(data);
         // alert('Registro modificado correctamente...!');
          this.ngOnInit();
        })
        Swal.fire(
          'Modificar!',
          'La accion ha sido modificada',
          'success'
        )
      }
    })
    }

    
}
