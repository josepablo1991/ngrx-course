import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./reducers";


export const selectAuthState = createFeatureSelector<AuthState>("auth")

// we can make a list of mapping functions
export const isLoggedIn = createSelector(
    selectAuthState,
    // the final argument is the projector function from the above function
    (auth) => !!auth.user
); 

export const isLoggedOut = createSelector(
    isLoggedIn,
    (loggedIn:boolean):boolean => !loggedIn
)