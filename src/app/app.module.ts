import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServiceChildComponent } from './service-child/service-child.component';
import { ServiceChild2Component } from './service-child2/service-child2.component';
import { MovieComponentComponent } from './movie-component/movie-component.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeDatafromApiComponent } from './employe-datafrom-api/employe-datafrom-api.component'

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ServicesComponent,
    PageNotFoundComponent,
    ServiceChildComponent,
    ServiceChild2Component,
    MovieComponentComponent,
    MovieDetailComponent,
    EmpListComponent,
    EmployeDatafromApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
