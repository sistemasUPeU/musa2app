
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantillaComponent } from './ComponentesVista/plantilla/plantilla.component';
import { LoginComponent } from './ComponentesVista/Seguridad/login/login.component';
import { HomeComponent } from './ComponentesVista/home/home.component';
import { UsuarioComponent } from './ComponentesVista/Seguridad/usuario/usuario.component';
import { RolComponent } from './ComponentesVista/Seguridad/rol/rol.component';
import { RegistrarpersonaComponent } from './ComponentesVista/Configuracion/registrarpersona/registrarpersona.component';
import { RegistrarubigeoComponent } from './ComponentesVista/Configuracion/registrarubigeo/registrarubigeo.component';
import { PruebaEditarComponent } from './ComponentesVista/Seguridad/prueba-editar/prueba-editar.component';
import { AgregarUserComponent } from './ComponentesVista/Seguridad/agregar-user/agregar-user.component';
import { AgregarRuserComponent } from './ComponentesVista/Seguridad/agregar-ruser/agregar-ruser.component';
import { RolusComponent } from './ComponentesVista/Seguridad/rolus/rolus.component';
import { UseropComponent } from './ComponentesVista/Seguridad/userop/userop.component';
import { AgregarUseropComponent } from './ComponentesVista/Seguridad/agregar-userop/agregar-userop.component';
import { EntradadeproductoComponent } from './ComponentesVista/GestionarAlmacen/entradadeproducto/entradadeproducto.component';
import { AccionesComponent } from './ComponentesVista/Mantenimiento/acciones/acciones.component';
import { VinculoComponent } from './ComponentesVista/CV/vinculo/vinculo.component';
import { VinculoopcComponent } from './ComponentesVista/CV/vinculoopc/vinculoopc.component';
import { ConductorComponent } from './ComponentesVista/Conductores/conductor/conductor.component';
import { VinculomodComponent} from './ComponentesVista/CV/vinculomod/vinculomod.component';
import { CursosComponent } from './ComponentesVista/Conductores/cursos/cursos.component';
import { PropietariosComponent } from './ComponentesVista/CV/propietarios/propietarios.component'
import { OpcionesComponent} from './ComponentesVista/Seguridad/opciones/opciones.component';
import { TarjetacComponent } from './ComponentesVista/Conductores/tarjetac/tarjetac.component';
import { ConfiguracionGrupoComponent } from './ComponentesVista/CronogramaDespacho/configuracion-grupo/configuracion-grupo.component';
import { BusesComponent } from './ComponentesVista/Reportes/buses/buses.component';
import { UsuariosComponent } from './ComponentesVista/Reportes/usuarios/usuarios.component';
import { ConductoresComponent } from './ComponentesVista/Reportes/conductores/conductores.component';
import { OproComponent } from './ComponentesVista/Reportes/opro/opro.component';
import { UsroComponent } from './ComponentesVista/Reportes/usro/usro.component';
import { PediReComponent } from './ComponentesVista/Reportes/pedi-re/pedi-re.component';
import { EstaPeComponent } from './ComponentesVista/Reportes/esta-pe/esta-pe.component';
import { PediAComponent } from './ComponentesVista/Reportes/pedi-a/pedi-a.component';
import { ManteComponent } from './ComponentesVista/Reportes/mante/mante.component';
import { ManteVComponent } from './ComponentesVista/Reportes/mante-v/mante-v.component';
import { RevisionesDComponent } from './ComponentesVista/Reportes/revisiones-d/revisiones-d.component';
import { PropiComponent } from './ComponentesVista/Reportes/propi/propi.component';
import { VincComponent } from './ComponentesVista/Reportes/vinc/vinc.component';
import { ContrasenaComponent } from './ComponentesVista/Seguridad/contrasena/contrasena.component'
import { MantenimientosComponent } from "./ComponentesVista/Mantenimiento/mantenimientos/mantenimientos.component";
import { SoatComponent } from './ComponentesVista/Conductores/soat/soat.component';
import { VehiculosComponent } from 'src/app/ComponentesVista/CV/vehiculos/vehiculos.component';
import { VentaComponent} from './ComponentesVista/Ventas/venta/venta.component';
import { from } from 'rxjs';
import { RegistrarventaComponent} from './ComponentesVista/Ventas/registrarventa/registrarventa.component';
import { AnularventaComponent } from './ComponentesVista/Ventas/anularventa/anularventa.component';
import { RegistrarcajaComponent } from './ComponentesVista/Ventas/registrarcaja/registrarcaja.component';
import { VinculoproComponent} from './ComponentesVista/CV/vinculopro/vinculopro.component';
import { VinculoCursoComponent } from './ComponentesVista/Conductores/vinculo-curso/vinculo-curso.component';

const routesHome: Routes = [
  {path:'', redirectTo:'',pathMatch:'full'},
  {path:'plantilla', component:PlantillaComponent},
  {path:'usuario', component:UsuarioComponent},
  {path:'rol', component:RolComponent},
  {path:'logon', component:LoginComponent},
  {path:'registrarpersona', component:RegistrarpersonaComponent},
  {path:'registrarubigeo', component:RegistrarubigeoComponent},
  {path:'prueba-editar', component:PruebaEditarComponent},
  {path:'agregar-user', component:AgregarUserComponent},
  {path:'agregar-ruser', component:AgregarRuserComponent},
  {path:'rolus', component:RolusComponent},
  {path: 'userop', component: UseropComponent},
  {path: 'agregar-userop', component: AgregarUseropComponent},
  {path:'entradadeproducto', component:EntradadeproductoComponent},
  {path:'acciones', component:AccionesComponent},
  {path:'vinculo', component:VinculoComponent},
  {path:'vinculoopc', component:VinculoopcComponent},
  {path:'acciones/:tipo', component:AccionesComponent},
  {path:'mantenimientos/:type', component:MantenimientosComponent},
  {path:'conductor',component:ConductorComponent},
  {path:'vinculomod', component:VinculomodComponent},
  {path:'vinculo', component:VinculoComponent},
  {path:'vinculoopc', component:VinculoopcComponent},
  {path:'conductor',component:ConductorComponent},
  {path:'cursos',component:CursosComponent},
  {path:'propietarios', component: PropietariosComponent},
  {path:'opciones',component:OpcionesComponent},
  {path:'tarjetac',component:TarjetacComponent},
  {path:'configuraciongrupo',component:ConfiguracionGrupoComponent},
  {path:'buse',component:BusesComponent},
  {path:'use',component:UsuariosComponent},
  {path:'conduc',component:ConductoresComponent},
  {path:'opro',component:OproComponent},
  {path:'usro',component:UsroComponent},
  {path:'pedire',component:PediReComponent},
  {path:'estape',component:EstaPeComponent},
  {path:'pedia',component:PediAComponent},
  {path:'mante',component:ManteComponent},
  {path:'mantev',component:ManteVComponent},
  {path:'revisionesd',component:RevisionesDComponent},
  {path:'propi',component:PropiComponent},
  {path:'vinc',component:VincComponent},
  {path:'soat',component:SoatComponent},
  {path: 'vehiculos', component:VehiculosComponent},
  {path: 'venta', component:VentaComponent},
  {path: 'registrarven', component:RegistrarventaComponent},
  {path: 'anularven', component:AnularventaComponent},
  {path: 'registrarcaja', component:RegistrarcajaComponent},
  {path: 'vinculopropietario', component: VinculoproComponent},
  {path: 'vinculocurso', component:VinculoCursoComponent}
  
];

const routes: Routes = [
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'cambiarcontra', component:ContrasenaComponent},
  {path:'home', component:HomeComponent, children: routesHome},
  {path:'prueba-editar', component:PruebaEditarComponent},
  {path:'agregar-user', component:AgregarUserComponent},
  {path:'agregar-ruser', component:AgregarRuserComponent},
  {path:'rolus', component:RolusComponent},
  {path: 'userop', component: UseropComponent},
  {path: 'agregar-userop', component: AgregarUseropComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  PlantillaComponent,
  UsuarioComponent,
  LoginComponent,
  HomeComponent,
  AccionesComponent,
  MantenimientosComponent,
  VinculoComponent,
  CursosComponent,
  OpcionesComponent,
  TarjetacComponent,
  PropietariosComponent,
  SoatComponent,
  VentaComponent,
  RegistrarcajaComponent,
  RegistrarventaComponent,
  VinculoproComponent
];
