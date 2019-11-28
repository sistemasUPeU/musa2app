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
import { MantenimientosComponent } from './ComponentesVista/Mantenimiento/mantenimientos/mantenimientos.component';
import { SoatComponent } from './ComponentesVista/Conductores/soat/soat.component';
import { DatePipe } from '@angular/common';


//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './ComponentesVista/Seguridad/login/login.component';
import { RequisitosComponent } from './ComponentesVista/CV/requisitos/requisitos.component';
import { VehiculosComponent } from './ComponentesVista/CV/vehiculos/vehiculos.component';
import { ContrasenaComponent } from './ComponentesVista/Seguridad/contrasena/contrasena.component';
import { VentaComponent } from './ComponentesVista/Ventas/venta/venta.component';
import { RegistrarventaComponent } from './ComponentesVista/Ventas/registrarventa/registrarventa.component';
import { AnularventaComponent } from './ComponentesVista/Ventas/anularventa/anularventa.component';
import { RegistrarcajaComponent } from './ComponentesVista/Ventas/registrarcaja/registrarcaja.component';
import { VinculoCursoComponent } from './ComponentesVista/Conductores/vinculo-curso/vinculo-curso.component';
import { VinculoproComponent } from './ComponentesVista/CV/vinculopro/vinculopro.component';
import { NgxPaginationModule} from 'ngx-pagination';
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
    ConfiguracionGrupoComponent,
    BusesComponent,
    UsuariosComponent,
    ConductoresComponent,
    OproComponent,
    UsroComponent,
    PediReComponent,
    EstaPeComponent,
    PediAComponent,
    ManteComponent,
    ManteVComponent,
    RevisionesDComponent,
    PropiComponent,
    VincComponent,
    MantenimientosComponent,
    SoatComponent,
    VehiculosComponent,
    ContrasenaComponent,
    VentaComponent,
    RegistrarventaComponent,
    AnularventaComponent,
    RegistrarcajaComponent,
    VinculoproComponent,
    VinculoCursoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    //NgxPopper,
    //FontAwesomeModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
