
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SigninComponent } from './signin.component';
import { loginRequested } from '../../userState/auth/auth.action';
import { HttpClientModule } from '@angular/common/http';
import { InputboxComponent } from '../inputbox/inputbox.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let store: MockStore;
  const initialState = {};

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SigninComponent,InputboxComponent],
        imports: [ReactiveFormsModule,HttpClientModule],
        providers: [
          provideMockStore({ initialState }),
        ],
      }).compileComponents();

      store = TestBed.inject(MockStore);
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch login action on form submission', () => {
    const mockFormValues = {
      email: 'test@example.com',
      password: 'password123',
    };

    spyOn(store, 'dispatch');
    component.signinForm.setValue(mockFormValues);
    component.signinSubmit();

    const expectedAction = loginRequested({
      email: 'test@example.com',
      password: 'password123',
    });

    expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
  });
});
