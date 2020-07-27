import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistarComponent } from './registar/registar.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { AuthGuardService } from './guard/auth-guard.service';
import { ListProductComponent } from './list-product/list-product.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { EditListProductComponent } from './list-product/edit-list-product/edit-list-product.component';
import { EnabledComponent } from './list-product/enabled/enabled.component';
import { DeletedComponent } from './list-product/deleted/deleted.component';
import { EditItemComponent } from './list-items/edit-item/edit-item.component';
import { NewItemComponent } from './list-items/new-item/new-item.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'inicio',component: InicioComponent},
      {path: 'login', component: LoginComponent},     
      {path: 'users',component: UsersComponent,canActivate: [AuthGuardService], children:[
        {path: 'listItems', component: ListItemsComponent, canActivate: [AuthGuardService]},
        {path: 'newItem', component: NewItemComponent, canActivate: [AuthGuardService]},
        {path: 'editItem/:id', component: EditItemComponent, canActivate: [AuthGuardService]},
        //Delivery Rotas
        {path: 'registerDelivery',component: RegistarComponent, canActivate: [AuthGuardService]},
        {path: 'listDelivery',component: ListProductComponent, canActivate: [AuthGuardService]},
        {path: 'editListProduct/:id',canActivate: [AuthGuardService],component: EditListProductComponent },
        {path: 'enabled/:id',canActivate: [AuthGuardService],component: EnabledComponent },
        {path: 'deleted/:id',canActivate: [AuthGuardService],component: DeletedComponent },
      ] },
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
