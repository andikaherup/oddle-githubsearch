import {createSlice} from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import {AppState} from '..'

interface UserState {
    users : any[],
    selectedUser : any,
    favorites : any[],
}

const initialState = { users : [], selectedUser : null, favorites : [] } as UserState;

export const UserSlice = createSlice({
    name: 'users',

    initialState,

    reducers : {
        setUsers : (state, action) => {
            state.users = action.payload;
        },
        setSelectedUser : (state, action) => {
            state.selectedUser = action.payload;
        },
        addFavorites : (state, action) => {
           //create new variable to store the new favorites
              let newFavorites = [...state.favorites];
            //check if the user is already in the favorites
            if(!newFavorites.find(user => user.id === action.payload.id)){
                //if not in the favorites, add it
                newFavorites.push(action.payload);
            }
        },
    },

    extraReducers : {
        [HYDRATE]: (state, action) => {
            //TODO - Handle client side state ovveride
            state.users = action.payload.users;
        }
    }
});
export const {setUsers, setSelectedUser,addFavorites} = UserSlice.actions;

export const selectSelectedUser = (state: AppState) => state.user.selectedUser;
export const selectUsers = (state: AppState) => state.user.users;
export const selectFavorites = (state: AppState) => state.user.favorites;

export default UserSlice.reducer;