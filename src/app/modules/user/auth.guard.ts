import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { tokenSelector } from './userState/auth/auth.selector';

export const authGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const router = inject(Router);
  let isAuth$ = store.select(tokenSelector);
  return new Promise<boolean>((resolve, reject) => {
    isAuth$.subscribe((data) => {
      if (data) resolve(true);
      else {
        resolve(false);
        router.navigate(['/signin']);
      }
    });
  });
};


export const signGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const router = inject(Router);
  let isAuth$ = store.select(tokenSelector);
  return new Promise<boolean>((resolve, reject) => {
    isAuth$.subscribe((data) => {
      if (!data) resolve(true);
      else {
        router.navigate(['']);
        resolve(false);
      }
    });
  });
};

