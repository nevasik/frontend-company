import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function PersonRow({person, onDelete, onEdit}) {
    return <tr>
        <td>{person.id}</td>
        <td>{person.firstName}</td>
        <td>{person.lastName}</td>
        <td>{person.email}</td>
        <td>{person.role}</td>
        <td>{person.login}</td>
        <td><Button variant="warning" onClick={() => onEdit(person.id)}>Редактировать</Button></td>
        <td><Button variant="danger" onClick={() => onDelete(person.id)}>Удалить</Button></td>
        <td><Link to={"/people/" + person.id}><Button>Подробнее</Button></Link></td>
    </tr>
}

export default PersonRow;