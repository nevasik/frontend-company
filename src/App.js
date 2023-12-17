import './App.css';
import {Route, Routes} from "react-router-dom";
import AllPeople from "./pages/people/AllPeople";
import OnePerson from "./pages/people/OnePerson";
import AllCampaigns from "./pages/companies/AllCompaigns";
import OneCampaign from "./pages/companies/OneCampaign";
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import NavBar from './components/NavBar';
import { createContext, useState } from 'react';
import { Provider } from 'react-redux'
import { store } from './store';

const UserContext = createContext(null);
// const CompainContext = createContext(null);



function App() {
    const [user, setUser] = useState(null)
    return (
        <Provider store={store}> 
        <UserContext.Provider value={{user, setUser}}>
        <NavBar/>
        <Routes>
            <Route path="/people" element={<ProtectedRoute> <AllPeople/> </ProtectedRoute>}/>
            <Route path="/compain" element={<ProtectedRoute> <AllCampaigns/> </ProtectedRoute>}/>
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/people/:id" element={<OnePerson/>}/>
            <Route path="/compain/:id" element={<OneCampaign/>}/>
            <Route path='*' exact={true} element={<ProtectedRoute> <AllPeople/> </ProtectedRoute>} />
            <Route path='*' exact={true} element={<ProtectedRoute> <AllCampaigns/> </ProtectedRoute>} />
        </Routes>
        </UserContext.Provider>
        </Provider>
    );
}

export {App, UserContext};
