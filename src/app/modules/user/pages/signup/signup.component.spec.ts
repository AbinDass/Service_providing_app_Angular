// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { SignupComponent } from './signup.component';

// xdescribe('SignupComponent', () => {
//   let component: SignupComponent;
//   let fixture: ComponentFixture<SignupComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [SignupComponent],
//     });
//     fixture = TestBed.createComponent(SignupComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SignupComponent } from './signup.component';
import { signUpRequested } from '../../userState/auth/auth.action';
import { InputboxComponent } from '../inputbox/inputbox.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let store: MockStore;
  const initialState = {}; // Add your initial state if needed

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SignupComponent,InputboxComponent],
        imports: [ReactiveFormsModule],
        providers: [
          provideMockStore({ initialState }),
        ],
      }).compileComponents();

      store = TestBed.inject(MockStore);
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch signUpRequested action on form submission', () => {
    const mockFormValues = {
      firstname: 'John',
      secondname: 'Doe',
      email: 'test@example.com',
      phone: '1234567890',
      password: 'password123',
      confirmpassword: 'password123',
    };

    spyOn(store, 'dispatch');
    component.signupForm.setValue(mockFormValues);
    component.signupSubmit();

    const expectedAction = signUpRequested({
      firstname: 'John',
      secondname: 'Doe',
      email: 'test@example.com',
      phone: '1234567890',
      password: 'password123',
      confirmpassword: 'password123',
      profilepicture: [],
    });

    expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
  });
});
