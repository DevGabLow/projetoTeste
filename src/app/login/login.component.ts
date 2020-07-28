import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router'
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   user: any = {};

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.user = {
      email : '',
      password: ''
    };
  }

  async  signin(form: FormGroup){
    if(form.valid){
      try{
        const response = await this.usersService.login(this.user).toPromise();

        const token = response['token'];

        localStorage.setItem('token',token);

        this.router.navigate(['/users'])
        //console.log('Seu token é: ' + response['token']);
        return;
      }catch(error){
        console.error(error);
      }
    }
    return alert('Login inválido')
  }  
}
