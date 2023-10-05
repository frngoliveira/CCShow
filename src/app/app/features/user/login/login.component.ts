import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/app/servico/login.service';
import { Users } from '../../../interface/users';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  registerForm!: FormGroup;
  user!: Users; 

  constructor(    
    public router: Router,
    private loginService: LoginService,
    private fb: FormBuilder 
  )
  {
    this.registerForm = this.fb.group({      
      userName: [''],      
      password: ['']
    });
  }



  ngOnInit() {
    if (localStorage.getItem('token') != null) {
      this.router.navigate(['/home']);
    }
  }

  
  Logon() {    
    this.user = this.registerForm.value;
    this.loginService.login(this.user.userName, this.user.password)
    .subscribe(
      () => {        
        this.router.navigate(['/home']);
      },
    )
  }
}
