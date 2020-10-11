import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component'
import { LoginPageComponent } from './login-page/login-page.component'
import { CreatePageComponent } from './create-page/create-page.component'
import { EditPageComponent } from './edit-page/edit-page.component'
import { DashbordPageComponent } from './dashbord-page/dashbord-page.component'
import { SharedModule } from '../shared/shared.module'
import { AuthGuard } from './shared/services/auth.guard'
import { SearchPipe } from './shared/pipes/search.pipe';
import { AlertComponent } from './shared/components/alert/alert.component'
import { AlertService } from './shared/services/alert.service'

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    CreatePageComponent,
    EditPageComponent,
    DashbordPageComponent,
    SearchPipe,
    AlertComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'dashboard', component: DashbordPageComponent, canActivate: [AuthGuard]},
          {path: 'create', component: CreatePageComponent, canActivate: [AuthGuard]},
          {path: 'post/:id/edit', component: EditPageComponent, canActivate: [AuthGuard]}
        ]
      }
    ])
  ],
  exports: [RouterModule],
  providers: [AuthGuard, AlertService]
})
export class AdminModule {
}