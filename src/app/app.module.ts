import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './app/features/user/home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './app/features/user/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddComponent } from './app/features/user/home/add/add.component';
import { UpdateComponent } from './app/features/user/home/update/update.component';
import { ModalComponent } from './app/shared/componentes/modal/modal.component';
import { FormatCpfComponent } from './app/shared/componentes/directives/format-cpf/format-cpf.component';




@NgModule({
  declarations: [ 
    HomeComponent,
    AppComponent,
    LoginComponent,
    AddComponent,
    UpdateComponent,
    ModalComponent,
    FormatCpfComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
