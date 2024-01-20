import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavBarItemComponent } from './top-nav-bar-item.component';

describe('TopNavBarItemComponent', () => {
  let component: TopNavBarItemComponent;
  let fixture: ComponentFixture<TopNavBarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopNavBarItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopNavBarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
