import Table from 'react-bootstrap/Table';
import PersonRow from "./PersonRow";


function PersonTable(props) {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Имя</th>
                <th>Фамилия</th>
                <th>Email</th>
                <th>Роль</th>
                <th>Пользователь</th>
                <th>Редактировать</th>
                <th>Удалить</th>
                <th>Посмотреть</th>
            </tr>
            </thead>
            <tbody>
            {props.people.map(p => <PersonRow key={p.id} person={p} onDelete={props.onDelete} onEdit={props.onEdit}/>)}
            </tbody>
        </Table>
    );
}

export default PersonTable;