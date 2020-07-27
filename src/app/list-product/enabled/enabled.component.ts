import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-enabled',
  templateUrl: './enabled.component.html',
  styleUrls: ['./enabled.component.css']
})
export class EnabledComponent implements OnInit {
del = {
  id: 0,
  enabled: 0
};
  constructor(private userService: UsersService, private router: ActivatedRoute,private routers: Router) { }

  ngOnInit() {
    this.router.params.subscribe(params=>{   
      this.userService.getOneDelivery(params.id)
      .subscribe(data =>{
        this.del = data;     
        this.del.enabled = 0;
        this.update(params.id);
      });    
    });
  }

  async update(id){
    try {
      this.userService.updateEnabledDelivey(this.del,id)
      .subscribe(data=>{
      });
      alert('Pedido confirmado com sucesso!')
      this.routers.navigate(['/listDelivery']);
      return;
    } catch (error) {
      return alert('Dados inválidos!')
    }
  }
}