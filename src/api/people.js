import api from "./common";


async function getPeople() {
    const response = await api.get("/people/all")
    return response.data
}

async function getPerson(id) {

    const response = await api.get(`/people/${id}`)
    return response.data
}

function deletePerson(id) {
    return api.delete(`/people/${id}`)
}

async function savePerson(person) {
    const response = await api.post("/people/new", person)
    return response.data
}

async function updatePerson(person) {
    const response = await api.put(`/people/update/${person.id}`, person)
    return response.data
}

export {getPeople, getPerson, deletePerson, savePerson, updatePerson}