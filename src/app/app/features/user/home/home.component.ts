import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/app/features/servico/home.service';
import { Users } from '../../interface/users';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { 
  mostrarModal: boolean = true;
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

  

  onConfirmDelete() {
    // Lógica para confirmar a exclusão do item
  }

  getProduto() {
    this.homeService.allUsers()
      .subscribe(      
        (result) => {        
          this.user = result;       
        }
    );
  }


  abrirModal() {
    this.mostrarModal = true;
  }

  fecharModal() {
    this.mostrarModal = false;
  }

  

}
