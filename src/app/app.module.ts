import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';

const routes: Routes = ([
  {path: 'user', component: UserListComponent},
  {path: 'user/create', component: UserCreateComponent},
  {path: 'user/edit/:id', component: UserCreateComponent}
]);

@NgModule({
  imports: [RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule],
  exports: [RouterModule]
})
export class UserRoutingModule { }





// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';


// import { AppComponent } from './app.component';
// import { ProductComponent } from './product/product.component';



// @NgModule({
//   declarations: [
//     AppComponent,
//     ProductComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
