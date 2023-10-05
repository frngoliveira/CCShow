import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/app/interface/users';
import { HomeService } from 'src/app/app/servico/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user!: Users[];

  constructor(    
    public router: Router, 
    private homeService: HomeService   
  ) { }

  ngOnInit() {    
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['/login']);
    }
    this.getProduto();
  }

  getProduto() {
    this.homeService.allUsers()
      .subscribe(      
        (result) => {        
          this.user = result;       
        }
    );
  }

}
