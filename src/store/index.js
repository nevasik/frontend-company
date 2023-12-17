import { configureStore } from "@reduxjs/toolkit";
import  peopleReducer  from "./slices/peopleSlice";
import  {setError}  from "./slices/peopleSlice";

import  campaignsReducer  from "./slices/campaignSlice";


import  form  from "./slices/formSlice";

import  {toggleModal}  from "./slices/formSlice";

import { fetchPeople, createPerson, removePerson, updatePerson, getPerson } from "./thunks/peopleThunk";


const store = configureStore({
    reducer: {
        people: peopleReducer,
        form: form,
        campaigns: campaignsReducer
    }
})

export {store};

export {fetchPeople, createPerson, removePerson, updatePerson, getPerson,  setError};

export {toggleModal};

