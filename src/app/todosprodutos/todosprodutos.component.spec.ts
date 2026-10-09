import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosprodutosComponent } from './todosprodutos.component';

describe('TodosprodutosComponent', () => {
  let component: TodosprodutosComponent;
  let fixture: ComponentFixture<TodosprodutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosprodutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
