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


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
