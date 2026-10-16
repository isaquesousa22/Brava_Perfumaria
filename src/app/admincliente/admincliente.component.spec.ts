import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminclienteComponent } from './admincliente.component';

describe('AdminclienteComponent', () => {
  let component: AdminclienteComponent;
  let fixture: ComponentFixture<AdminclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminclienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
