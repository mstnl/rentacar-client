import { Component, OnInit } from '@angular/core';
import { AracService } from '../../services/arac.service';
import { RezervasyonService } from '../../services/rezervasyon.service';
import { Arac } from '../../models/arac';

@Component({
  selector: 'app-arac-arama',
  templateUrl: './arac-arama.component.html',
  styleUrls: ['./arac-arama.component.css']
})
export class AracAramaComponent implements OnInit {
  marka: string = '';
  model: string = '';
  araclar: Arac[] = [];

  constructor(private aracService: AracService, private rezervasyonService: RezervasyonService) {}

  ngOnInit(): void {
    this.getAraclar();
  }

  onSearch() {
    this.getAraclar();
  }

  getAraclar() {
    this.aracService.getAraclar().subscribe((data: Arac[]) => {
      this.araclar = data.filter(arac => {
        return (!this.marka || arac.marka?.toLowerCase().includes(this.marka.toLowerCase())) &&
               (!this.model || arac.model?.toLowerCase().includes(this.model.toLowerCase()));
      });
    });
  }

  rezervasyonYap(arac: Arac) {
    const rezervasyon = {
      aracId: arac.id,
      kullaniciId: 1, // Giriş yapan kullanıcının ID'si burada kullanılmalı
      baslangicTarihi: new Date(),
      bitisTarihi: new Date()
    };

    this.rezervasyonService.createRezervasyon(rezervasyon?).subscribe(response => {
      alert('Rezervasyon başarılı!');
      this.getAraclar();
    });
  }
}
