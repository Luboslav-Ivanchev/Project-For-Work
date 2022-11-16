import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBurgersComponent } from './menu-burgers.component';

describe('MenuBurgersComponent', () => {
  let component: MenuBurgersComponent;
  let fixture: ComponentFixture<MenuBurgersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBurgersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBurgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
