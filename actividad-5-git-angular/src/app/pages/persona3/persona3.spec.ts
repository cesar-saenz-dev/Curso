import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Persona3 } from './persona3';

describe('Persona3', () => {
  let component: Persona3;
  let fixture: ComponentFixture<Persona3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Persona3],
    }).compileComponents();

    fixture = TestBed.createComponent(Persona3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
