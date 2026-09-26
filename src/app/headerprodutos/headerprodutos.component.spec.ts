import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderprodutosComponent } from './headerprodutos.component';

describe('HeaderprodutosComponent', () => {
  let component: HeaderprodutosComponent;
  let fixture: ComponentFixture<HeaderprodutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderprodutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
