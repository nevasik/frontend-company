import Form from 'react-bootstrap/Form';
import LoadingButton from "../LoadingButton";
import { convertToBase64 } from '../../utils/file';
import { useEffect, useState } from 'react';
import { getPeople } from '../../api/people';

function CompainForm({form, setForm, onAction, type, loading =false}) {
    const [people, setPeople] = useState([])


    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setForm({ ...form, avatar: base64 });
      };   

    const loadPeople = async () => {
        const people = await getPeople()

        setPeople(people)
    }  

    useEffect(() => {
        loadPeople();
    }, []);

    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Название компании</Form.Label>
                <Form.Control value={form.name} onChange={(event) => setForm({...form, name: event.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Примерный бюджет компании</Form.Label>
                <Form.Control value={form.budget} onChange={(event) => setForm({...form, budget: event.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                <Form.Label>Целевая аудиторию вашей компании</Form.Label>
                <Form.Control value={form.targetAudience} onChange={(event) => setForm({...form, targetAudience: event.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                <Form.Label>Дата регистрации компании</Form.Label>
                <Form.Control type="date" value={form.startDate} onChange={(event) => setForm({...form, startDate: event.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                <Form.Label>Дата окончания регистрации компании</Form.Label>
                <Form.Control type="date" value={form.endDate} onChange={(event) => setForm({...form, endDate: event.target.value})}/>
            </Form.Group>             

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                <Form.Label>Основатель компании</Form.Label>
                <Form.Select  onChange={(event) => setForm({...form, person: event.target.value})}
                             aria-label="Default select example">
                                <option value={form.person}>Выберите</option>
                                {people.map((person) => (
                                    <option key={person.id} value={person.id}>
                                        {person.firstName + person.lastName}
                                    </option>
                                ))}
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
                <Form.Label>Аватар</Form.Label>
                <Form.Control type="file" accept= ".jpeg, .png, .jpg"name={form.avatar} onChange={handleFileUpload}/>
            </Form.Group>

            <LoadingButton onClick={e => {e.preventDefault(); onAction()}} text={type} loading={loading}/>
        </Form>
    );
}

export default CompainForm;