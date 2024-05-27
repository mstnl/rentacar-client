import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
  kullaniciAdi: string = '';
  sifre: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const newUser = {
      kullaniciAdi: this.kullaniciAdi,
      sifre: this.sifre,
     // adminMi: 'user',
      adminMi: 'user'
    };

    this.authService.register(newUser).subscribe(response => {
      this.router.navigate(['/login']);
    });
  }
}
