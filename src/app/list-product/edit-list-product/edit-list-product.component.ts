import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-list-product',
  templateUrl: './edit-list-product.component.html',
  styleUrls: ['./edit-list-product.component.css']
})
export class EditListProductComponent implements OnInit {
  del = {
    id: 0,
    name: '',
    local: '',
    hora: '',
    status: '',
    quantity: '',
    itemName: '',
    itemId: ''
  };
  items: Array<any> = [];
  private token = `bearer ${localStorage.getItem('token')}`;
  constructor(private router: ActivatedRoute, private userService: UsersService,private routers: Router) { }

 async ngOnInit() {
    this.router.params.subscribe(params=>{   
      this.userService.getOneDelivery(params.id)
      .subscribe(data =>{
        this.del = data;    
      });    
      this.userService.getItems(this.token).subscribe(data =>{
        this.items = data;
      })
    });
    
  }

 update(form: FormGroup){
    if(form.valid){
      try {
        this.userService.updateDelivery(this.del,this.del.id)
        .subscribe(data=>{
          console.log(data);
        });
        this.routers.navigate(['/listDelivery']);
        return;
      } catch (error) {
        return alert('Dados inválidos!')
      }
    }
  }

}
