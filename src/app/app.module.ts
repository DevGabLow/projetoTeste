import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LayoutComponent } from './layout/layout.component';
import { RegistarComponent } from './registar/registar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { ListProductComponent } from './list-product/list-product.component';
import { UsersComponent } from './users/users.component';
import { AuthGuardService } from './guard/auth-guard.service';
import { ListItemsComponent } from './list-items/list-items.component';
import { TopoComponent } from './users/topo/topo.component';
import { EditListProductComponent } from './list-product/edit-list-product/edit-list-product.component';
import { EnabledComponent } from './list-product/enabled/enabled.component';
import { DeletedComponent } from './list-product/deleted/deleted.component';
import { EditItemComponent } from './list-items/edit-item/edit-item.component';
import { NewItemComponent } from './list-items/new-item/new-item.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { RouterModule } from '@angular/router';


const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LayoutComponent,
    RegistarComponent,
    LoginComponent,
    ListProductComponent,
    UsersComponent,
    ListItemsComponent,
    TopoComponent,
    EditListProductComponent,
    EnabledComponent,
    DeletedComponent,
    EditItemComponent,
    NewItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(maskConfig),
    RouterModule.forRoot([
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: '', component: LayoutComponent, children: [
        {path: 'login', component: LoginComponent}]},
        {path: 'users',component: UsersComponent,canActivate: [AuthGuardService]},
        {path: 'listItems', component: ListItemsComponent, canActivate: [AuthGuardService]},
        {path: 'newItem', component: NewItemComponent, canActivate: [AuthGuardService]},
        {path: 'editItem/:id', component: EditItemComponent, canActivate: [AuthGuardService]},
        //Delivery Rotas
        {path: 'registerDelivery',component: RegistarComponent, canActivate: [AuthGuardService]},
        {path: 'listDelivery',component: ListProductComponent, canActivate: [AuthGuardService]},
        {path: 'editListProduct/:id',canActivate: [AuthGuardService],component: EditListProductComponent },
        {path: 'enabled/:id',canActivate: [AuthGuardService],component: EnabledComponent },
        {path: 'deleted/:id',canActivate: [AuthGuardService],component: DeletedComponent }, 
    ])
    
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
