import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsigTaskComponent } from './asig-task.component';

describe('AsigTaskComponent', () => {
  let component: AsigTaskComponent;
  let fixture: ComponentFixture<AsigTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsigTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsigTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
