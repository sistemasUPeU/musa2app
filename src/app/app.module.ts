import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageServiceModule} from 'ngx-webstorage-service';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './ComponentesGlobal/sidebar/sidebar.component';
import { UsuarioComponent } from './ComponentesVista/Seguridad/usuario/usuario.component';
import { RolComponent } from './ComponentesVista/Seguridad/rol/rol.component';
import { RegistrarpersonaComponent } from './ComponentesVista/Configuracion/registrarpersona/registrarpersona.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarubigeoComponent } from './ComponentesVista/Configuracion/registrarubigeo/registrarubigeo.component';
import { EntradadeproductoComponent } from './ComponentesVista/GestionarAlmacen/entradadeproducto/entradadeproducto.component';
<<<<<<< HEAD
import { VinculoopcComponent } from './ComponentesVista/CV/vinculoopc/vinculoopc.component';
import { VinculomodComponent } from './ComponentesVista/CV/vinculomod/vinculomod.component';
=======
import { ConductorComponent } from './ComponentesVista/Conductores/conductor/conductor.component';
>>>>>>> 23477ce8643b55a1c10d8ffc0953b0bfcef5f67e


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    routingComponents,
    UsuarioComponent,
    RolComponent,
    RegistrarpersonaComponent,
    RegistrarubigeoComponent,
    EntradadeproductoComponent,
<<<<<<< HEAD
    VinculoopcComponent,
    VinculomodComponent
=======
    ConductorComponent
>>>>>>> 23477ce8643b55a1c10d8ffc0953b0bfcef5f67e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
