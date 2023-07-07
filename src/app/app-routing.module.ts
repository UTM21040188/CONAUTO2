import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './crud/main/main.component';
import { LoginComponent } from './crud/login/login.component';
import { RegisterComponent } from './crud/register/register.component';
import { DireccionesComponent } from './crud/direcciones/direcciones.component';
import { ModelosAutoComponent } from './crud/modelos-auto/modelos-auto.component';
import { ServiciosAutoComponent } from './crud/servicios-auto/servicios-auto.component';

const routes: Routes = [{path: '', component:MainComponent},
                        {path:'login', component:LoginComponent},
                        {path:'register',component:RegisterComponent},
                        {path:'direcciones', component:DireccionesComponent},
                        {path:'modelos', component:ModelosAutoComponent},
                        {path:'servicio', component:ServiciosAutoComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
