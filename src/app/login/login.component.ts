import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { Cliente } from '../model/cliente';
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
private service = inject(ClienteService);


  logar(){

   
    if(this.email == "admin" && this.senha == "admin"){
      alert("Login realizado com sucesso!");
      this.router.navigate(['/admin']);
      return;
    }

    this.service.listar().subscribe({
      next: (cliente) => {
        const clienteEncontrado = cliente.find(c => c.email === this.email && c.senha === this.senha);

        if (clienteEncontrado) {
          alert("Login realizado com sucesso!");
          this.router.navigate(['/dashboard']);
        } else {
          alert("Login ou senha incorretos!");
        }
      },
        error: (erro) => {
      console.error('Erro ao logar: verifique se o servidor está funcionando corretamente', erro);
    }

    });

  }
}
