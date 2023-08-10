import { createSelector } from "@ngrx/store";
import { appStateInterface } from "src/app/appStore/appstate";

const userAuth = (state: any) => state.userAuthentication;
export const tokenSelector = createSelector(userAuth,(state)=> state.token)
export const userData = createSelector(userAuth,(state) => state.user)
export const idSelector = createSelector(userAuth,(state)=> state.user._id)

