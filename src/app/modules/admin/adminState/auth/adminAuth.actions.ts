import {createAction, props} from '@ngrx/store'
import { user, userModel } from '../../model/adminState'

export const loginRequested = createAction(
    '[Auth] loginRequested',
    props<{email: string, password: string}>()
)

export const loginSuccess = createAction(
    '[Auth] loginSuccess',
    props<user>()
)

export const autologin = createAction(
    '[Auth] autologin', 
)

export const autologinSuccess = createAction(
    '[Auth] autologinSuccess',
    props<{
        token: string|null,
        user:userModel
    }>()
)

export const logout = createAction(
    'Auth logoutRequested',
)

export const signFailed = createAction (
    '[Auth] signFailed',
    props<{error:string}>()
)