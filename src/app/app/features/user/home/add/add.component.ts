import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddService } from 'src/app/app/features/servico/add.service';
import { Users } from 'src/app/app/features/interface/users';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  registerForm!: FormGroup;
  user!: Users;

  constructor(    
    public router: Router,  
    private fb: FormBuilder,
    private addService: AddService  
  ) 
  {
    this.registerForm = this.fb.group({      
      userName: [''],      
      password: [''],
      role: ['']
    });
  }

  ngOnInit() {    
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['/login']);
    }
  }

  salvar() {
    debugger
    this.user = Object.assign({}, this.registerForm.value);
    this.addService
      .save(this.user)
      .subscribe((response) => {
        this.router.navigate(['/home']);
      });
  }
}
