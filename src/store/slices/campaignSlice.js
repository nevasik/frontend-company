import {  createSlice } from "@reduxjs/toolkit";
import { createCampaign, fetchCampaigns, getCampaign, removeCampaign, updateCampaign } from "../thunks/campaignThunk";

const defaultCampaign = {name: "", budget: "", targetAudience: "", startDate: "", endDate: "", person: 0}



const campaigns = createSlice({
    name: 'campaigns',
    initialState: {
        campaigns: [],
        loading: false,
        error: null,
        campaign: defaultCampaign
    },
    reducers: {
        editCampaign(state, action) {
           const campaign = state.campaigns.find(p => p.id === action.payload)
           if (campaign){
            state.campaign = campaign
           } else {
            state.campaign = defaultCampaign
           }
        },
        setCampaign(state, action) {
            state.campaign = action.payload
        },
        setError(state, action) {
            state.error = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchCampaigns.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchCampaigns.fulfilled, (state, action) => {
            state.loading = false
            state.campaigns = action.payload
        })
        builder.addCase(fetchCampaigns.rejected, (state, action) => {
            state.loading = false
            state.error = action.error
        })
        
        builder.addCase(createCampaign.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(createCampaign.fulfilled, (state, action) => {
            state.loading = false
            state.campaigns.push(action.payload)
        })
        builder.addCase(createCampaign.rejected, (state, action) => {
            state.loading = false
            state.error = {title: "Не удалось создать"}
        })

        builder.addCase(removeCampaign.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(removeCampaign.fulfilled, (state, action) => {
            state.loading = false
            const index = state.campaigns.findIndex(p => p.id === action.payload)
            state.campaigns.splice(index, 1)
        })
        builder.addCase(removeCampaign.rejected, (state, action) => {
            state.loading = false
            state.error = {title: "Не удалось удалить"}
        })

        builder.addCase(updateCampaign.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(updateCampaign.fulfilled, (state, action) => {
            state.loading = false
            const index = state.campaigns.findIndex(p => p.id === action.payload.id)
            state.campaigns[index] = action.payload
        })
        builder.addCase(updateCampaign.rejected, (state, action) => {
            state.loading = false
            state.error = {title: "Не удалось обновить"}
        })

        builder.addCase(getCampaign.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getCampaign.fulfilled, (state, action) => {
            state.loading = false
            state.campaign = action.payload.entity
        })
        builder.addCase(getCampaign.rejected, (state, action) => {
            state.loading = false
            state.error = {title: "Не удалось обновить"}
        })
    }
})

export default campaigns.reducer
export const { editCampaign, setCampaign, setError} = campaigns.actions