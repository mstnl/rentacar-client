import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  kullaniciAdi: string = '';
  sifre: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.kullaniciAdi, this.sifre).subscribe(response => {
      if (response.adminMi == true) {  // admin kontrol
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/arac-arama']);
      }
    });
  }
}
