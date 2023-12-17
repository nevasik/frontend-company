import api from "./common";


async function getStatistics() {
    const response = await api.get("/statistics/all")
    return response.data
}

async function getStatisticsByid(id) {
    const response = await api.get(`/statistics/${id}`)
    return response.data
}

async function saveStatistics(statistics) {
    const response = await api.post("/statistics/new", statistics)
    return response.data
}

async function updateStatistics(statistics) {
    const response = await api.put(`/statistics/update/${statistics.id}`, statistics)
    return response.data
}

function deleteStatistics(id) {
    return api.delete(`/statistics/${id}`)
}

// решить какую id сюда передавать
async function getDimensionCompain(id) {
    const response = await api.get(`/dimension/${id}`)

    return response.data
}

// решить какую id сюда передавать
async function getPerformanceCompain(id) {
    const response = await api.get(`/performance/${id}`)

    return response.data
}

export {getStatistics, getStatisticsByid, saveStatistics, updateStatistics, deleteStatistics, getDimensionCompain, getPerformanceCompain}