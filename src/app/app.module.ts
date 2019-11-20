import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './ComponentesGlobal/sidebar/sidebar.component';
import { UsuarioComponent } from './ComponentesVista/Seguridad/usuario/usuario.component';
import { RolComponent } from './ComponentesVista/Seguridad/rol/rol.component';
import { RegistrarpersonaComponent } from './ComponentesVista/Configuracion/registrarpersona/registrarpersona.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarubigeoComponent } from './ComponentesVista/Configuracion/registrarubigeo/registrarubigeo.component';
import { ServiceService } from './service/service.service';
import { PruebaEditarComponent } from './ComponentesVista/Seguridad/prueba-editar/prueba-editar.component';
import { AgregarUserComponent } from './ComponentesVista/Seguridad/agregar-user/agregar-user.component';
import { AgregarRuserComponent } from './ComponentesVista/Seguridad/agregar-ruser/agregar-ruser.component';
import { RolusComponent } from './ComponentesVista/Seguridad/rolus/rolus.component';
import { UseropComponent } from './ComponentesVista/Seguridad/userop/userop.component';
import { AgregarUseropComponent } from './ComponentesVista/Seguridad/agregar-userop/agregar-userop.component';
import { EntradadeproductoComponent } from './ComponentesVista/GestionarAlmacen/entradadeproducto/entradadeproducto.component';
import { VinculoopcComponent } from './ComponentesVista/CV/vinculoopc/vinculoopc.component';
import { VinculomodComponent } from './ComponentesVista/CV/vinculomod/vinculomod.component';
import { ConductorComponent } from './ComponentesVista/Conductores/conductor/conductor.component';
import { CursosComponent } from './ComponentesVista/Conductores/cursos/cursos.component';
import { PropietariosComponent } from './ComponentesVista/CV/propietarios/propietarios.component';
import { OpcionesComponent } from './ComponentesVista/Seguridad/opciones/opciones.component';
import { TarjetacComponent } from './ComponentesVista/Conductores/tarjetac/tarjetac.component';
import { SoatComponent } from './ComponentesVista/Conductores/soat/soat.component';
//import { NgxPopper } from 'angular-popper';

//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './ComponentesVista/Seguridad/login/login.component';
const routes: Routes = [
  {path: '/login', component:LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    routingComponents,
    UsuarioComponent,
    RolComponent,
    RegistrarpersonaComponent,
    RegistrarubigeoComponent,
    PruebaEditarComponent,
    AgregarUserComponent,
    AgregarRuserComponent,
    RolusComponent,
    UseropComponent,
    AgregarUseropComponent,
    LoginComponent,
    EntradadeproductoComponent,
    VinculoopcComponent,
    VinculomodComponent,
    ConductorComponent,
    CursosComponent,
    PropietariosComponent,
    OpcionesComponent,
    TarjetacComponent,
    SoatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //NgxPopper,
    //FontAwesomeModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
