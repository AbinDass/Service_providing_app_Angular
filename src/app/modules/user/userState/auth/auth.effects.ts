import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import * as AuthActions from './auth.action';
import { UserAuthService } from '../../services/user-auth.service';
import { Injectable } from '@angular/core';
import { user, userModel } from '../../model/userState';
import { Router } from '@angular/router';

@Injectable()
export class authEffects {
  constructor(
    private action$: Actions,
    private auth: UserAuthService,
    private router: Router
  ) {}
  loginRequest = createEffect(() => {
    return this.action$.pipe(
      ofType(AuthActions.loginRequested),
      switchMap((logindata: { email: string; password: string }) => {
        return this.auth.userLogin(logindata).pipe(
          map((data) => {
            console.log(data, 'hiin daaata');
            let res = { token: data.token, user: data.user };
            this.router.navigate(['']);
            return AuthActions.loginSuccess(res);
          })
        );
      })
    );
  });

  signupRequest = createEffect(() => {
    return this.action$.pipe(
      ofType(AuthActions.signUpRequested),
      switchMap((signupdata: userModel) => {
        console.log(signupdata, 'iam here signupdata');
        return this.auth.userRegister(signupdata).pipe(
          map((data) => {
            console.log(data.userdata, data.token, 'ivde dfsdf');
            let res = { token: data.token, user: data.userdata };
            this.router.navigate(['']);
            return AuthActions.signUpSuccess(res);
          })
        );
      })
    );
  });

  logout = createEffect(
    () => {
      return this.action$.pipe(
        ofType(AuthActions.logout),
        map(() => {
          return this.auth.userLogout();
        })
      );
    },
    { dispatch: false }
  );
}
