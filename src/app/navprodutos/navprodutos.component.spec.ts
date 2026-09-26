import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavprodutosComponent } from './navprodutos.component';

describe('NavprodutosComponent', () => {
  let component: NavprodutosComponent;
  let fixture: ComponentFixture<NavprodutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavprodutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
