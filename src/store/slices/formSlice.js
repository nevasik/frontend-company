import { createSlice } from "@reduxjs/toolkit";
import { createPerson, updatePerson } from "../thunks/peopleThunk";
import { createCampaign, updateCampaign } from "../thunks/campaignThunk";


const form = createSlice({
    name: 'form',
    initialState: {
        modal: "off"
    },
    reducers: {
        toggleModal(state, action) {
            state.modal = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase('people/editPerson', (state, action) => {
            if (action.payload) {
                state.modal = "edit"
            } else {
                state.modal = "add"
            }
        });

        builder.addCase('campaigns/editCampaign', (state, action) => {
            if (action.payload) {
                state.modal = "edit"
            } else {
                state.modal = "add"
            }
        });

        builder.addCase(createPerson.fulfilled, (state, action) => {
            state.modal = "off"
        });

        builder.addCase(updatePerson.fulfilled, (state, action) => {
            state.modal = "off"
        });

        builder.addCase(createCampaign.fulfilled, (state, action) => {
            state.modal = "off"
        });

        builder.addCase(updateCampaign.fulfilled, (state, action) => {
            state.modal = "off"
        });
    }
})

export default form.reducer

export const {toggleModal} = form.actions