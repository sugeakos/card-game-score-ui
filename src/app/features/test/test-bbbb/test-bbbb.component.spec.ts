import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBbbbComponent } from './test-bbbb.component';

describe('TestBbbbComponent', () => {
  let component: TestBbbbComponent;
  let fixture: ComponentFixture<TestBbbbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestBbbbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestBbbbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
