import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantillaComponent } from './ComponentesVista/plantilla/plantilla.component';

const routes: Routes = [
  {path:'', component:PlantillaComponent},
  {path:'ctc', component:PlantillaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  PlantillaComponent
];
