import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DisasterComponent } from './disaster/disaster.component';
import { DisasterCreateComponent } from './disaster-create/disaster-create.component';
import { DisasterEditComponent } from './disaster-edit/disaster-edit.component';
import { DisasterDetailComponent } from './disaster-detail/disaster-detail.component';

const appRoutes: Routes = [
  {
    path: 'disasters',
    component: DisasterComponent,
    data: { title: 'Disasters' }
  },
  {
    path: 'disaster-details/:id',
    component: DisasterDetailComponent,
    data: { title: 'Disaster Details' }
  },
  {
    path: 'disaster-edit/:id',
    component: DisasterEditComponent,
    data: { title: 'Disaster Edit' }
  },
  {
    path: 'disaster-create',
    component: DisasterCreateComponent,
    data: { title: 'Disaster Create' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: { title: 'Sign Up' }
  },
  { path: '',
    redirectTo: '/disasters',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DisasterComponent,
    DisasterCreateComponent,
    DisasterEditComponent,
    DisasterDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
