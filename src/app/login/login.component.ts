import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { Cliente } from '../model/cliente';
import { Admin } from '../model/admin';
import { AdminService } from '../services/admin.service';
import { ClienteService } from '../services/cliente.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink, HeaderComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

email: string = '';
senha: string = ''

private router = inject(Router);
private service = inject(ClienteService)
private adminservice = inject(AdminService);


  logar(){

   this.adminservice.listar().subscribe({
    next: (admin) =>{
      const adminEncontrado = admin.find(c => c.email === this.email && c.senha === this.senha);

      if (adminEncontrado) {
        alert("Login do administrador realizado com sucesso!");
        this.router.navigate(['/admin']);
      } else {
        this.logarCliente();
      }
    },
    error: (erro) => {
      console.error('Erro ao logar: verifique se o servidor está funcionando corretamente', erro);
    }


   });
  }

  private logarCliente() {
    this.service.listar().subscribe({
      next: (cliente) => {
        const clienteEncontrado = cliente.find(c => c.email === this.email && c.senha === this.senha);
  
        if (clienteEncontrado) {
          alert('Login realizado com sucesso!');
          this.router.navigate(['/dashboard']);
        } else {
          alert('Login ou senha incorretos!');
        }
      },
      error: (erro) => {
        console.error('Erro ao logar: verifique se o servidor está funcionando corretamente', erro);
      }
    });
  }
  
}



