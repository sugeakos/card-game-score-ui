import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCcccComponent } from './test-cccc.component';

describe('TestCcccComponent', () => {
  let component: TestCcccComponent;
  let fixture: ComponentFixture<TestCcccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestCcccComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestCcccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
