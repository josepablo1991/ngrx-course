import { createSelector } from "@ngrx/store";

// we can make a list of mapping functions
export const isLoggedIn = createSelector(
    state => state["auth"],
    // the final argument is the projector function from the above function
    (auth) => !!auth.user
); 

export const isLoggedOut = createSelector(
    isLoggedIn,
    (loggedIn:boolean):boolean => !loggedIn
)