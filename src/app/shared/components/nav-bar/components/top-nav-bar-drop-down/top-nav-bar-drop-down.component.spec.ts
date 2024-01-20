import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavBarDropDownComponent } from './top-nav-bar-drop-down.component';

describe('TopNavBarDropDownComponent', () => {
  let component: TopNavBarDropDownComponent;
  let fixture: ComponentFixture<TopNavBarDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopNavBarDropDownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopNavBarDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
