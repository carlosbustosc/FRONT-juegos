import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaVideoComponent } from './tarjeta-video.component';

describe('TarjetaVideoComponent', () => {
  let component: TarjetaVideoComponent;
  let fixture: ComponentFixture<TarjetaVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
