
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantillaComponent } from './ComponentesVista/plantilla/plantilla.component';
import { LoginComponent } from './ComponentesVista/Seguridad/login/login.component';
import { HomeComponent } from './ComponentesVista/home/home.component';
import { UsuarioComponent } from './ComponentesVista/Seguridad/usuario/usuario.component';
import { RolComponent } from './ComponentesVista/Seguridad/rol/rol.component';
import { RegistrarpersonaComponent } from './ComponentesVista/Configuracion/registrarpersona/registrarpersona.component';
import { RegistrarubigeoComponent } from './ComponentesVista/Configuracion/registrarubigeo/registrarubigeo.component';
import { EntradadeproductoComponent } from './ComponentesVista/GestionarAlmacen/entradadeproducto/entradadeproducto.component';
import { AccionesComponent } from './ComponentesVista/Mantenimiento/acciones/acciones.component';
import { VinculoComponent } from './ComponentesVista/CV/vinculo/vinculo.component';
import { VinculoopcComponent } from './ComponentesVista/CV/vinculoopc/vinculoopc.component';
import { ConductorComponent } from './ComponentesVista/Conductores/conductor/conductor.component';
import { VinculomodComponent} from './ComponentesVista/CV/vinculomod/vinculomod.component';
import { CursosComponent } from './ComponentesVista/Conductores/cursos/cursos.component';

const routesHome: Routes = [
  {path:'', redirectTo:'',pathMatch:'full'},
  {path:'plantilla', component:PlantillaComponent},
  {path:'usuario', component:UsuarioComponent},
  {path:'rol', component:RolComponent},
  {path:'logon', component:LoginComponent},
  {path:'registrarpersona', component:RegistrarpersonaComponent},
  {path:'registrarubigeo', component:RegistrarubigeoComponent},
  {path:'entradadeproducto', component:EntradadeproductoComponent},
  {path:'acciones', component:AccionesComponent},
  {path:'vinculo', component:VinculoComponent},
  {path:'vinculoopc', component:VinculoopcComponent},
  {path:'acciones/:tipo', component:AccionesComponent},
  {path:'conductor',component:ConductorComponent},
  {path:'vinculomod', component:VinculomodComponent},
  {path:'vinculo', component:VinculoComponent},
  {path:'vinculoopc', component:VinculoopcComponent},
  {path:'acciones/:tipo', component:AccionesComponent},
  {path:'conductor',component:ConductorComponent},
  {path:'cursos',component:CursosComponent}
];

const routes: Routes = [
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent, children: routesHome}
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
  CursosComponent
];
