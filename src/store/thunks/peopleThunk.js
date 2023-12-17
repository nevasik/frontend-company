import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/common";


const fetchPeople = createAsyncThunk('people/getAll', async () => {
    const response = await api.get("/people/all")
    return response.data
})

const createPerson = createAsyncThunk("people/create", async (person) => {
    const response = await api.post("/people/new", person)
    return response.data
})

const removePerson = createAsyncThunk("people/remove", async (id) => {
   const response = await api.delete(`/people/${id}`)
    return id
})

const updatePerson = createAsyncThunk("people/update", async (person) => {
    const response = await api.put(`/people/update/${person.id}`, person)
    return response.data
})

const getPerson = createAsyncThunk("people/get", async (id) => {
    const response = await api.get(`/people/${id}`)
    return response.data
})

export {fetchPeople, createPerson, removePerson, updatePerson, getPerson}