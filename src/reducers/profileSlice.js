import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import profileServices from "../services/profileFetch";

export const fetchProfile = createAsyncThunk(
    'profile/setProfile',
    async () => {
        const profile = await profileServices.getProfile();
        return profile;
    }
);

export const changeProfile = createAsyncThunk(
    'profile/editProfile',
    async (newObject) => {
        const profile = await profileServices.editProfile(newObject);
        return profile;
    }
);



const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        profile: {}
    },
    reducers: {
        // setProfile: (state, action) => {
        //     state.profile = action.payload;
        // },
        // editProfile: (state, action) => {
        //     state.profile = action.payload;
        // }
    },
    // extraReducers: {
    //     [fetchProfile.fulfilled]: (state, action) => {
    //         state.profile = action.payload;
    //     },
    //     [changeProfile.fulfilled]: (state, action) => {
    //         state.profile = action.payload;
    //     }
    // }
    extraReducers(builder) {
        builder
            .addCase(fetchProfile.fulfilled, (state, action) => {
                // console.log("initial state",current(state));
                // console.log("Data recevied",action.payload);
                state.profile = action.payload;
                // console.log("state after",current(state));
            })
            .addCase(changeProfile.fulfilled, (state, action) => {
                state.profile = action.payload;
            })
    }
});

// export const getProfile = () => {
//     return async (dispatch) => {
//         const profile = await profileServices.getProfile();
//         dispatch(setProfile(profile));
//     }
// }

// export const updateProfile = (id, newObject) => {
//     return async (dispatch) => {
//         const profile = await profileServices.editProfile(id, newObject);
//         dispatch(editProfile(profile));
//     }
// }

export const { setProfile, editProfile } = profileSlice.actions;
export default profileSlice.reducer;
