import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/app/interface/users';
import { UpdateService } from 'src/app/app/servico/update.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  registerForm!: FormGroup;
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
    //this.validation()
  }

  validation() {
    this.registerForm = this.fb.group({      
      userName: [''],
      password: [''],
      role: ['']
    });
  }

  loadUser ()
  {
    let id = this.route.snapshot.paramMap.get('id');    
    this.updateService.getUserById(Number(id))
      .subscribe((result: Users) =>
      {  
        debugger      
        this.user = Object.assign({}, result);
      })
  }
}
