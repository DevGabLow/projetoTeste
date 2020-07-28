import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registar',
  templateUrl: './registar.component.html',
  styleUrls: ['./registar.component.css']
})
export class RegistarComponent implements OnInit {

  constructor(private router: Router,private userServer: UsersService) { }

  delivery: any = {};
  items: Array<any> = [];
  private token = `bearer ${localStorage.getItem('token')}`;

  ngOnInit(): void {
    this.delivery = {
      name : '',
      local: '',
      phone: '',
      hora: '',
      quantidade: '',
      status: '',
      itemId: '',
    };
    this.userServer.getItems(this.token)
    .subscribe(data=>{
      this.items = data;
      console.log(this.items);
    })
  }

  async registerDelivery(form: FormGroup) {
    if (form.valid) {
      console.log(form.value);
      try {
        const response = await this.userServer.postDelivery(this.delivery).toPromise();
        this.router.navigate(['/listDelivery']);
        return;
      } catch (error) {
       console.log(error);
      }
    }
  }
}
