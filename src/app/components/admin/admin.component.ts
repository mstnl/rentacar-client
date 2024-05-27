import { Component, OnInit } from '@angular/core';
import { AracService } from '../../services/arac.service';
import { KullaniciService } from '../../services/kullanici.service';
import { Arac } from '../../models/arac';
import { Kullanici } from '../../models/kullanici';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  araclar: Arac[] = [];
  kullanicilar: Kullanici[] = [];

  constructor(private aracService: AracService, private kullaniciService: KullaniciService) { }

  ngOnInit(): void {
    this.getAraclar();
    this.getKullanicilar();
  }

  getAraclar() {
    this.aracService.getAraclar().subscribe((data: Arac[]) => {
      this.araclar = data;
    });
  }

  getKullanicilar() {
    this.kullaniciService.getKullanicilar().subscribe((data: Kullanici[]) => {
      this.kullanicilar = data;
    });
  }

  yeniAracEkle() {
    // Yeni araç ekleme işlemi
  }

  guncelle(arac: Arac) {
    // Araç güncelleme işlemi
  }

  sil(aracId: number) {
    this.aracService.deleteArac(aracId).subscribe(() => {
      this.getAraclar();
    });
  }

  kullaniciGuncelle(kullanici: Kullanici) {
    // Kullanıcı güncelleme işlemi
  }

  kullaniciSil(kullaniciId: number) {
    this.kullaniciService.deleteKullanici(kullaniciId).subscribe(() => {
      this.getKullanicilar();
    });
  }
}
