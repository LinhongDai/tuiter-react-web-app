import { createSlice } from "@reduxjs/toolkit";
import info from './info.json';

const profileSlice = createSlice({
  name: 'profile',
  initialState: info,
  reducers: {
    editProfile(state, action) {
      const [fn, ln] = action.payload.nam.split(' ')
          return {
            ...state,
            firstName: fn,
            lastName: ln,
            location: action.payload.loc,
            bio: action.payload.bi,
            website: action.payload.web,
            dateOfBirth: action.payload.bd
          }
    }
  }
});
export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;