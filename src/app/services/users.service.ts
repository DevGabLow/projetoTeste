import { Injectable } from '@angular/core';

//Add import
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiRoutes = {
  login: 'user/signin',
  items: 'items',
  delivery: 'delivery',
  enabled: 'delivery/enabled',
  deleted: 'delivery/deleted'
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private UriApi: string = 'https://apirestbb.herokuapp.com/';

  constructor(private http: HttpClient) { }

  //GETITEMS
  public getItems(token: string = ''){
    let uri = `${this.UriApi}${ApiRoutes.items}`;

    return this.http.get<Array<any>>(uri,this.loadHeaders(token));
  }
  public getOneItem(id: number){
    let uri = `${this.UriApi}${ApiRoutes.items}/${id}`;
    return this.http.get<any>(uri,this.loadHeaders(`bearer ${localStorage.getItem('token')}`));
  }

  public insertItem(item: any){
    let uri = `${this.UriApi}${ApiRoutes.items}`;
    return this.http.post(uri,JSON.stringify(item),this.loadHeaders(`bearer ${localStorage.getItem('token')}`));
  }

  public updateItem(item: any, id: number){
    let uri = `${this.UriApi}${ApiRoutes.items}/${id}`;
    return this.http.patch<any>(uri,JSON.stringify(item),this.loadHeaders(`bearer ${localStorage.getItem('token')}`));
  }
  public deleteItem(item:any ,id: number){
    let uri = `${this.UriApi}${ApiRoutes.items}/delete/${id}`;
    return this.http.patch<any>(uri,JSON.stringify(item),this.loadHeaders(`bearer ${localStorage.getItem('token')}`));
  }



  //----------------------ENTREGAS-----------------------------------
  public getDelivery(token: string = ''){
    let uri = `${this.UriApi}${ApiRoutes.delivery}`;
    return this.http.get<Array<any>>(uri,this.loadHeaders(token));
  }

  public postDelivery(delivery: any){
    let uri = `${this.UriApi}${ApiRoutes.delivery}`;
    return this.http.post(uri,JSON.stringify(delivery),this.loadHeaders(`bearer ${localStorage.getItem('token')}`));
  }

  public getOneDelivery(id: number){
    let uri = `${this.UriApi}${ApiRoutes.delivery}/${id}`;
    return this.http.get<any>(uri,this.loadHeaders(`bearer ${localStorage.getItem('token')}`));
  }

  public updateDelivery(delivery: any, id: number){
    let uri = `${this.UriApi}${ApiRoutes.delivery}/${id}`;
    return this.http.patch<any>(uri,JSON.stringify(delivery),this.loadHeaders(`bearer ${localStorage.getItem('token')}`));
  }

  public updateEnabledDelivey(delivery: any,id: number){
    let uri = `${this.UriApi}${ApiRoutes.enabled}/${id}`;
    return this.http.patch<any>(uri,JSON.stringify(delivery),this.loadHeaders(`bearer ${localStorage.getItem('token')}`));
  }
  public updateDeletedDelivey(delivery: any,id: number){
    let uri = `${this.UriApi}${ApiRoutes.deleted}/${id}`;
    return this.http.patch<any>(uri,JSON.stringify(delivery),this.loadHeaders(`bearer ${localStorage.getItem('token')}`));
  }

  //Autenticação Usuário
  public login(user: any){

    let uri = `${this.UriApi}${ApiRoutes.login}`;

    return this.http.post(uri,JSON.stringify(user),this.loadHeaders());
  }

  private loadHeaders(token: string = ''){
    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
      "Authorization" : `${token}`,
    });

    return { headers };
  }
}
