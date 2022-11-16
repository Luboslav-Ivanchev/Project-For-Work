import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSaladsComponent } from './menu-salads.component';

describe('MenuSaladsComponent', () => {
  let component: MenuSaladsComponent;
  let fixture: ComponentFixture<MenuSaladsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSaladsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSaladsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
