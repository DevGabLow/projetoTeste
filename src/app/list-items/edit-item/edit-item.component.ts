import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  item = { 
    name: '',
    quantity: 0,
    preco: 0,
    id: 0,
  };
  constructor(private router: ActivatedRoute, private routers: Router, private userService: UsersService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params=>{
      this.userService.getOneItem(params.id)
      .subscribe(data=>{
        this.item = data;
      });
    });
  }

  update(form: FormGroup){
    if(form.valid){
      try {
        this.userService.updateItem(this.item,this.item.id)
        .subscribe(data=>{
          console.log(data);
        });
        this.routers.navigate(['/listItems']);
        return;
      } catch (error) {
        return alert('Dados inválidos!')
      }
    }
  }

}
