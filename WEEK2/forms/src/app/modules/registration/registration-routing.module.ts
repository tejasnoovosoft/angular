import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from "../../components/registration/registration.component";

const routes: Routes = [
  {
    path: "register",
    component: RegistrationComponent,
    title: "Registration | Forms "
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RegistrationRoutingModule {
}
