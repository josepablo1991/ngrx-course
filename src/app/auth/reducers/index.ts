import { state } from '@angular/animations';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { AuthActions } from '../action-types';
import { User } from '../model/user.model';


export const authFeatureKey = 'auth';

export interface AuthState {
    user: User
}

export const initialAuthState: AuthState = {
  user: undefined
}



// this is a reducer
// returns a new version of the state or new stat creator
export const authReducer = createReducer(
  //initialState
  initialAuthState,

  on(AuthActions.login, (state:AuthState, action) => {
    return {
      user: action.user,
    }
  })


);
