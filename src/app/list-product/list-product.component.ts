import { Component, OnInit } from '@angular/core';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  faWindowClose = faWindowClose;
  faCheckCircle = faCheckCircle;
  faPencilAlt = faPencilAlt;
  show: boolean = false;

  deliverys: Array<any> = [];
  delivery = {
    id: 0,
    name: '',
    local: '',
    phone: '',
    hora: '',
    status: '',
    quantity: '',
    itemName: '',
    itemId: ''
  };

  private token = `bearer ${localStorage.getItem('token')}`;

  constructor(private userServic: UsersService) { }

  ngOnInit() {
    this.userServic.getDelivery(this.token)
      .subscribe(data => {

        if (data.length > 0) {
          this.show = true;
        }
        console.log(this.show);
        this.deliverys = data
      });
  }
}