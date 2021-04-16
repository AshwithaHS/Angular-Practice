import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServiceChildComponent } from './service-child/service-child.component';
import { ServiceChild2Component } from './service-child2/service-child2.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path:'contact', component:ContactComponent},
  {
    path:'services',
   component:ServicesComponent,
   children:[
    {
      path:'s1',
      component:ServiceChildComponent
    },
    {
      path:'s2',
      component:ServiceChild2Component
    }
  ]
  },
  {path:'', redirectTo:'contact', pathMatch: 'full' },
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
