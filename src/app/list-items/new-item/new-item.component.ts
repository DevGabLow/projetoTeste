import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  item: any = {
    name: '',
    quantity: '',
    preco: ''
  }
  constructor(private userService: UsersService, private route: Router) { }

  ngOnInit(): void {
  }
  async registerItem(form: FormGroup) {
    if (form.valid) {
      try {
        this.userService.insertItem(this.item).subscribe(data => {

        })
        this.route.navigate(['/listItems']);
        return;
      } catch (error) {

      }
    }else{
      alert('Dados inválido');
    }
  }
}
