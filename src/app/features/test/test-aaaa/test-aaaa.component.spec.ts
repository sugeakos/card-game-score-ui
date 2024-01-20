import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAaaaComponent } from './test-aaaa.component';

describe('TestAaaaComponent', () => {
  let component: TestAaaaComponent;
  let fixture: ComponentFixture<TestAaaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestAaaaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestAaaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
