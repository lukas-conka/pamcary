import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatMenuModule} from '@angular/material';

import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { BotoesComponent } from './botoes/botoes.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

import {NgxMaskModule} from 'ngx-mask'



@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    ConteudoComponent,
    BotoesComponent,
    MenuComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    NgxMaskModule.forRoot({showMaskTyped : true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
