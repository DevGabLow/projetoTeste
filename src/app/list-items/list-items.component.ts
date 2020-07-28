import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  faWindowClose = faWindowClose;
  faCheckCircle = faCheckCircle;
  faPencilAlt = faPencilAlt;
  items: Array<any> = [];
  item = {
    name: '',
    quantity: 0,
    preco: 0,
    deleted: 0,
    id: 0,
  }
  private token = `bearer ${localStorage.getItem('token')}`;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getItems(this.token)
      .subscribe(data =>{
       this.items = data;  
       console.log(this.items) 
      });        
  }

   deletar(id){
     this.item.id = id;
     this.usersService.getOneItem(this.item.id).subscribe(data=>{
      this.item = data;
      this.item.deleted = 1;
       this.usersService.deleteItem(this.item,id)
      .subscribe(rs=>{
        console.log(this.item);
        this.items = this.items.filter(item => id != item.id)
      })
     });
    
  }
}
