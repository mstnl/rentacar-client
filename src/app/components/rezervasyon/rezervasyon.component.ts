import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './rezervasyon.component.html', /// register yazıyordu
  styleUrls: ['./rezervasyon.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const newUser = {
      eposta: this.email,
      sifre: this.password,
      role: 'user'
    };

    this.authService.register(newUser).subscribe(response => {
      this.router.navigate(['/login']);
    });
  }
}
