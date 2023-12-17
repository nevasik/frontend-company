import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/common";


const fetchCampaigns = createAsyncThunk('campaigns/getAll', async () => {
    const response = await api.get("/compain/all")
    return response.data
})

const createCampaign = createAsyncThunk("campaigns/create", async (person) => {
    const response = await api.post("/compain/new", person)
    return response.data
})

const removeCampaign = createAsyncThunk("campaigns/remove", async (id) => {
   const response = await api.delete(`/compain/${id}`)
    return id
})

const updateCampaign = createAsyncThunk("campaigns/update", async (person) => {
    const response = await api.put(`/compain/update/${person.id}`, person)
    return response.data
})

const getCampaign = createAsyncThunk("campaigns/get", async (id) => {
    const response = await api.get(`/compain/${id}`)
    return response.data
})

export {fetchCampaigns, createCampaign, removeCampaign, updateCampaign, getCampaign}




