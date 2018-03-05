import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {path: 'user', component: UserListComponent},
  {path: 'user/create', component: UserCreateComponent},
  {path: 'user/edit/:id', component: UserCreateComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    UserRoutingModule
  ],
  exports: [RouterModule],
  declarations: [UserComponent]
  // declarations: [UserListComponent, UserCreateComponent]
})
export class UserModule { }
