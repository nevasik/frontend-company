import { Button } from "react-bootstrap";
import { logout } from "../api/auth";
import { useNavigate } from "react-router-dom";

function LogoutButton({userInfo}) {
    const navigate = useNavigate()
    const logOut = async () => {
        try {
            await logout()
            userInfo.setUser(null)
            navigate('/login')
        } catch(e){
            console.log(e)
        }
    }
   return userInfo.user && <Button onClick={logOut} variant="outline-danger">Выйти</Button>
}

export default LogoutButton;