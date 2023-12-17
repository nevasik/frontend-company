import api from "./common";


async function getCompains() {
    const response = await api.get("/compain/all")
    return response.data
}

async function getCompain(id) {
    const response = await api.get(`/compain/${id}`)
    return response.data
}

async function saveCompain(compain) {
    const response = await api.post("/compain/new", compain)
    return response.data
}

async function updateCompain(compain) {
    const response = await api.put(`/compain/update/${compain.id}`, compain)
    return response.data
}

function deleteCompain(id) {
    return api.delete(`/compain/${id}`)
}

export {getCompains, getCompain, saveCompain, updateCompain, deleteCompain}