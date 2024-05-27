import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AracAramaComponent } from './arac-arama.component';

describe('AracAramaComponent', () => {
  let component: AracAramaComponent;
  let fixture: ComponentFixture<AracAramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AracAramaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AracAramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
