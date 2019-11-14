
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
import { SoatComponent } from './ComponentesVista/Conductores/soat/soat.component';
import { VehiculosComponent } from 'src/app/ComponentesVista/CV/vehiculos/vehiculos.component'

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
  {path:'conductor',component:ConductorComponent},
  {path:'vinculomod', component:VinculomodComponent},
  {path:'vinculo', component:VinculoComponent},
  {path:'vinculoopc', component:VinculoopcComponent},
  {path:'conductor',component:ConductorComponent},
  {path:'cursos',component:CursosComponent},
  {path:'propietarios', component: PropietariosComponent},
  {path:'opciones',component:OpcionesComponent},
  {path:'tarjetac',component:TarjetacComponent},
  {path:'soat',component:SoatComponent},
  {path: 'vehiculos', component:VehiculosComponent}
];

const routes: Routes = [
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
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
  VinculoComponent,
  CursosComponent,
  OpcionesComponent,
  TarjetacComponent,
  PropietariosComponent,
  SoatComponent
];
