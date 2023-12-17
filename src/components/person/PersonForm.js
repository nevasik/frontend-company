import Form from 'react-bootstrap/Form';
import LoadingButton from "../LoadingButton";
import { convertToBase64 } from '../../utils/file';


function PersonForm({form, setForm, onAction, type, loading =false}) {

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setForm({ ...form, avatar: base64 });
      };

    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Имя</Form.Label>
                <Form.Control value={form.firstName} onChange={(event) => setForm({...form, firstName: event.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Отчество</Form.Label>
                <Form.Control value={form.secondName} onChange={(event) => setForm({...form, secondName: event.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                <Form.Label>Фамилия</Form.Label>
                <Form.Control value={form.lastName} onChange={(event) => setForm({...form, lastName: event.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                <Form.Label>Email</Form.Label>
                <Form.Control value={form.email} onChange={(event) => setForm({...form, email: event.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                <Form.Label>Роль</Form.Label>
                <Form.Select value={form.role} onChange={(event) => setForm({...form, role: event.target.value})}
                             aria-label="Default select example">
                    <option value="ADMIN">Админ</option>
                    <option value="MANAGER">Менеджер</option>
                    <option value="ANALITIC">Аналитик</option>
                    <option value="USER">Пользователь</option>
                </Form.Select>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                <Form.Label>Имя пользователя</Form.Label>
                <Form.Control value={form.login} onChange={(event) => setForm({...form, login: event.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" value={form.password} onChange={(event) => setForm({...form, password: event.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput8">
                <Form.Label>Аватар</Form.Label>
                <Form.Control type="file" accept= ".jpeg, .png, .jpg"name={form.avatar} onChange={handleFileUpload}/>
            </Form.Group>
            
            <LoadingButton onClick={e => {e.preventDefault(); onAction()}} text={type} loading={loading}/>
        </Form>
    );
}

export default PersonForm;