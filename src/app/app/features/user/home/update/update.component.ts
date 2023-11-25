import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { findIndex, toArray } from 'rxjs';
import { Users } from 'src/app/app/features/interface/users';
import { UpdateService } from 'src/app/app/features/servico/update.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent {
  
  registerForm!: FormGroup;
  userName: string = '';
  password: string = '';
  role: string = '';
  user!: Users;

  constructor(    
    public router: Router,
    public route: ActivatedRoute,
    private fb: FormBuilder,
    public updateService: UpdateService
  ) { }

  ngOnInit() {    
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['/login']);
    }
    this.loadUser ();
    this.validation()
  }

  validation() {
    this.registerForm = this.fb.group({  
      id: [this.route.snapshot.paramMap.get('id')],
      userName: [''],
      password: [''],
      role: ['']
    });
  }

  loadUser ()
  {
    let id = this.route.snapshot.paramMap.get('id');
    this.updateService.getUserById(Number(id))
      .subscribe((users: Users[]) =>
      {  
         this.userName = users[0].userName;
         this.password = users[0].password;
         this.role = users[0].role;
      })
  }

  update() {
    this.user = Object.assign({ }, this.registerForm.value);
    this.updateService
      .update(this.user)
      .subscribe( () => {
        this.router.navigate(['/home']);
      });
  }

}
