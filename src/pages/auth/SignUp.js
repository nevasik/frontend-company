import {useState} from "react";
import CommonContainer from '../../components/CommonContainer';
import { signup } from '../../api/auth';
import Error from '../../components/Error';
import PersonForm from "../../components/person/PersonForm";
import { Link, useNavigate } from "react-router-dom";

const defaultSignUp = {firstName: "", secondName: "", lastName: "", email: "", role: "ADMIN", login: "", password: ""}


function SignUp() {
    const navigate = useNavigate()
    const [signUp, setSignUp] = useState(defaultSignUp)
    const [error, setError] = useState(null)

    const onAction = async () => {
        try {
           await signup(signUp)
           navigate('/login')
        }
        catch(e) {
            setError({title: "Ошибки регистрации", message: "Что-то пошло не так"})
        }
    }

    return (
        <CommonContainer title="Регистрация">
            {error && <Error title={error.title} onClose={() => setError(null)}>{error.message}</Error> }
            <PersonForm type="Зарегистрировать" form={signUp} setForm={setSignUp} onAction={onAction}/>
        </CommonContainer> 
    );
}

export default SignUp;