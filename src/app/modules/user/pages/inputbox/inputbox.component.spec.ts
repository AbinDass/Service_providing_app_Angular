import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputboxComponent } from './inputbox.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

describe('InputboxComponent', () => {
  let component: InputboxComponent;
  let fixture: ComponentFixture<InputboxComponent>;
  let formBuilder: FormBuilder = new FormBuilder();
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputboxComponent],
      imports:[ReactiveFormsModule],
      providers: [{ provide: FormBuilder, useValue: formBuilder }],
    });
    fixture = TestBed.createComponent(InputboxComponent);
    component = fixture.componentInstance;
    component.form = formBuilder.group({
      name:['',Validators.required]
    })
    component.inputFormControlName = 'name';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
