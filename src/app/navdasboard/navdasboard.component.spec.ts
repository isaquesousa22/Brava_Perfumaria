import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavdasboardComponent } from './navdasboard.component';

describe('NavdasboardComponent', () => {
  let component: NavdasboardComponent;
  let fixture: ComponentFixture<NavdasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavdasboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavdasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
