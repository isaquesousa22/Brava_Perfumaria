import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminprodutosComponent } from './adminprodutos.component';

describe('AdminprodutosComponent', () => {
  let component: AdminprodutosComponent;
  let fixture: ComponentFixture<AdminprodutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminprodutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
