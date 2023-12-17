import Form from 'react-bootstrap/Form';
import {useContext, useState} from "react";
import LoadingButton from "../../components/LoadingButton";
import CommonContainer from '../../components/CommonContainer';
import { login } from '../../api/auth';
import Error from '../../components/Error';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

function Login() {
    const [auth, setAuth] = useState({login: "", password: ""})
    const [loading] = useState(false)
    const [error, setError] = useState(null)
    const userInfo = useContext(UserContext)
    const navigate = useNavigate()

    const onSave = async (event) => {
        event.preventDefault()
        try {
           await login(auth)
           localStorage.setItem('user', auth)
           userInfo.setUser({...userInfo, user: auth})
           navigate('/people')
        }
        catch(e) {
            if (e.request.status == 401) {
               setError({title: "Ошибки аутентификации", message: "Неправильные логин или пароль"})
            }else {
               setError({title: "Ошибка аутентификации", message: "Неизвестная ошибка"})
            }
            setAuth({...auth, password: ""})
        }
    }

    return (
        <CommonContainer title="Аутентификация">
            {error && <Error title={error.title} onClose={() => setError(null)}>{error.message}</Error> }
        <Form>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Имя пользователя</Form.Label>
                    <Form.Control value={auth.login} onChange={event => setAuth({...auth, login: event.target.value})}/>
               </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" value={auth.password} onChange={event => setAuth({...auth, password: event.target.value})}/>
               </Form.Group>
            <LoadingButton onClick={onSave} text="Войти" loading={loading}/> 
            <Link className="mx-5" to="/signUp">Не зарегистрированы?</Link>
        </Form> 
        </CommonContainer> 
    );
}

export default Login;