import {  createSlice } from "@reduxjs/toolkit";
import { createPerson, fetchPeople, getPerson, removePerson, updatePerson } from "../thunks/peopleThunk";
const defaultPerson = {firstName: "", secondName: "", lastName: "", email: "", role: "ADMIN", login: "", password: ""}

const people = createSlice({
    name: 'people',
    initialState: {
        people: [],
        loading: false,
        error: null,
        person: defaultPerson
    },
    reducers: {
        editPerson(state, action) {
           const person = state.people.find(p => p.id === action.payload)
           if (person){
            state.person = person
           } else {
            state.person = defaultPerson
           }
        },
        setPerson(state, action) {
            state.person = action.payload
        },
        setError(state, action) {
            state.error = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchPeople.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchPeople.fulfilled, (state, action) => {
            state.loading = false
            state.people = action.payload
        })
        builder.addCase(fetchPeople.rejected, (state, action) => {
            state.loading = false
            state.error = action.error
        })
        
        builder.addCase(createPerson.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(createPerson.fulfilled, (state, action) => {
            state.loading = false
            state.people.push(action.payload)
        })
        builder.addCase(createPerson.rejected, (state, action) => {
            state.loading = false
            state.error = {title: "Не удалось создать", text: action.error.response.data.message}
        })

        builder.addCase(removePerson.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(removePerson.fulfilled, (state, action) => {
            state.loading = false
            const index = state.people.findIndex(p => p.id === action.payload)
            state.people.splice(index, 1)
        })
        builder.addCase(removePerson.rejected, (state, action) => {
            state.loading = false
            state.error = {title: "Не удалось удалить"}
        })

        builder.addCase(updatePerson.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(updatePerson.fulfilled, (state, action) => {
            state.loading = false
            const index = state.people.findIndex(p => p.id === action.payload.id)
            state.people[index] = action.payload
        })
        builder.addCase(updatePerson.rejected, (state, action) => {
            state.loading = false
            state.error = {title: "Не удалось обновить"}
        })

        builder.addCase(getPerson.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getPerson.fulfilled, (state, action) => {
            state.loading = false
            state.person = action.payload.entity
        })
        builder.addCase(getPerson.rejected, (state, action) => {
            state.loading = false
            state.error = {title: "Не удалось обновить"}
        })
    }
})

export default people.reducer
export const {getAll, getById, editPerson, setPerson, setError} = people.actions