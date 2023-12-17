import api from "./common";

async function login(auth) {
    const formData = new FormData();
    formData.append('username', auth.login);
    formData.append('password', auth.password);
    return api.post("/login", formData)
}

async function signup(signup) {
   return api.post('/people/registration', signup)
}

async function logout() {
    return api.post('/logout')
}

export {login, signup, logout};