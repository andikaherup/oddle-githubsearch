import {createSlice} from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export const UserSlice = createSlice({
    name: 'users',

    initialState : {
        users: [],
    },

    reducers : {
        setUsers : (state, action) => {
            state.users = action.payload;
        }
    },

    extraReducers : {
        [HYDRATE]: (state, action) => {
            //TODO - Handle client side state ovveride
            state.users = action.payload.users;
        }
    }
});
export const {setUsers} = UserSlice.actions; 
export default UserSlice.reducer;