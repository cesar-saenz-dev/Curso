import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Persona2 } from './persona2';

describe('Persona2', () => {
  let component: Persona2;
  let fixture: ComponentFixture<Persona2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Persona2],
    }).compileComponents();

    fixture = TestBed.createComponent(Persona2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
