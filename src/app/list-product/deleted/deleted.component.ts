import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css']
})
export class DeletedComponent implements OnInit {

  constructor(private userService: UsersService, private router: ActivatedRoute,private routers: Router) { }
  del = {
    id: 0,
    deleted: 0
  };
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.userService.getOneDelivery(params.id)
        .subscribe(data => {
          this.del = data;
          this.del.deleted = 1;
          this.update(params.id);
        });
    });
  }

  async update(id){
    try {
      this.userService.updateDeletedDelivey(this.del,id)
      .subscribe(data=>{
      });
      alert('Pedido deletado com sucesso!');
      this.routers.navigate(['/listDelivery']);
      return;
    } catch (error) {
      return alert('Dados inválidos!')
    }
  }

}
