import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map,mergeMap, switchMap,of } from 'rxjs';
import * as AuthActions from './auth.action';
import { UserAuthService } from '../../services/user-auth.service';
import { Injectable } from '@angular/core';
import { user, userModel } from '../../model/userState';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Injectable()
export class authEffects {
  constructor(
    private action$: Actions,
    private auth: UserAuthService,
    private router: Router,
    private store: Store

  ) {}
  loginRequest = createEffect(() => {
    return this.action$.pipe(
      ofType(AuthActions.loginRequested),
      switchMap((logindata: { email: string; password: string }) => {
        return this.auth.userLogin(logindata).pipe(
          map((data) => {
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
        return this.auth.userRegister(signupdata).pipe(
          map((data) => {
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

  autoLogin = createEffect(
    () => {
       return this.action$.pipe(
        ofType(AuthActions.autologin),
        map(()=> {
          let  A =  this.auth.autologin()
          if(A) this.store.dispatch(AuthActions.autologinSuccess({
            token:A.token,
            user:A.user
          })) 
        })
       )
    },{dispatch: false}
    )
}
