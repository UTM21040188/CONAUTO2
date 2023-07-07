import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerComponent } from './crud/container/container.component';
import { HeaderComponent } from './crud/header/header.component';
import { FooterComponent } from './crud/footer/footer.component';
import { MainComponent } from './crud/main/main.component';
import { LoginComponent } from './crud/login/login.component';
import { RegisterComponent } from './crud/register/register.component';
import { DireccionesComponent } from './crud/direcciones/direcciones.component';
import { ModelosAutoComponent } from './crud/modelos-auto/modelos-auto.component';
import { ServiciosAutoComponent } from './crud/servicios-auto/servicios-auto.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    DireccionesComponent,
    ModelosAutoComponent,
    ServiciosAutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
