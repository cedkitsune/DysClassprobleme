import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteclassComponent } from './compteclass.component';

describe('CompteclassComponent', () => {
  let component: CompteclassComponent;
  let fixture: ComponentFixture<CompteclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteclassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompteclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
