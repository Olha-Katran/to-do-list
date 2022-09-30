import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListPageComponent } from './task-list-page.component';

describe('ListContainerComponent', () => {
  let component: TaskListPageComponent;
  let fixture: ComponentFixture<TaskListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
