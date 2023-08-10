import {createAction, props} from '@ngrx/store'
import { user, userModel } from '../../model/userState'

export const loginRequested = createAction(
    '[Auth] loginRequested',
    props<{email: string, password: string}>()
)

export const loginSuccess = createAction(
    '[Auth] loginSuccess',
    props<user>()
)


export const signUpRequested = createAction(
    '[Auth] signUpRequested',
    props<userModel>()
)

export const signUpSuccess = createAction(
    '[Auth] signUpSuccess',
    props<user>()
)

export const logout = createAction(
    'Auth logoutRequested',
)

export const signFailed = createAction (
    '[Auth] signFailed',
    props<{error:string}>()
)