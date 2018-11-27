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
import { constants } from './app.constants';
import { HeaderComponent } from './shared/layout/header/header.component';
import { SidebarDirective } from './shared/layout/header/sidebar.directive';

const appRoutes: Routes = [
  {
    path: constants.pageUrl.disasters,
    component: DisasterComponent,
    data: { title: 'Disasters' }
  },
  {
    path: constants.pageUrl.disasterDetails,
    component: DisasterDetailComponent,
    data: { title: 'Disaster Details' }
  },
  {
    path: constants.pageUrl.disasterEdit,
    component: DisasterEditComponent,
    data: { title: 'Disaster Edit' }
  },
  {
    path: constants.pageUrl.disasterCreate,
    component: DisasterCreateComponent,
    data: { title: 'Disaster Create' }
  },
  {
    path: constants.pageUrl.signin,
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: constants.pageUrl.signup,
    component: SignupComponent,
    data: { title: 'Sign Up' }
  },
  { path: '',
    redirectTo: constants.pageUrl.disasters,
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
    DisasterDetailComponent,
    HeaderComponent,
    SidebarDirective
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
