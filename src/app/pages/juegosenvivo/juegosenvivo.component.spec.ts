import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosenvivoComponent } from './juegosenvivo.component';

describe('JuegosenvivoComponent', () => {
  let component: JuegosenvivoComponent;
  let fixture: ComponentFixture<JuegosenvivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegosenvivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosenvivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
