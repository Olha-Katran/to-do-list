import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndEditTaskDialogComponent } from './add-and-edit-task-dialog.component';

describe('AddTaskDialogComponent', () => {
  let component: AddAndEditTaskDialogComponent;
  let fixture: ComponentFixture<AddAndEditTaskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAndEditTaskDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAndEditTaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
