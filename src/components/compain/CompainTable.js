import Table from 'react-bootstrap/Table';
import CompainRow from "./CompainRow";


function CompainTable(props) {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Название</th>
                <th>Бюджет</th>
                <th>Целевая аудитория</th>
                <th>Дата начала</th>
                <th>Дата окончания</th>
                <th>Основатель компании</th>
                <th>Редактировать</th>
                <th>Удалить</th>
                <th>Посмотреть</th>
            </tr>
            </thead>
            <tbody>
            {props.campaigns.map(c => <CompainRow key={c.id} campaign={c} onDelete={props.onDelete} onEdit={props.onEdit}/>)}
            </tbody>
        </Table>
    );
}

export default CompainTable;