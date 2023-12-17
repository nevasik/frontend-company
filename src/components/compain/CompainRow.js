import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import { formatDate } from "../../utils/date";

function CompainRow({campaign, onDelete, onEdit}) {
    return <tr>
        <td>{campaign.id}</td>
        <td>{campaign.name}</td>
        <td>{campaign.budget}</td>
        <td>{campaign.targetAudience}</td>
        <td>{formatDate(campaign.startDate)}</td>
        <td>{formatDate(campaign.endDate)}</td>
        <td><Link to={`/people/${campaign.person}`}>Посмотреть</Link></td>
        <td><Button variant="warning" onClick={() => onEdit(campaign.id)}>Редактировать</Button></td>
        <td><Button variant="danger" onClick={() => onDelete(campaign.id)}>Удалить</Button></td>
        <td><Link to={"/compain/" + campaign.id}><Button>Подробнее</Button></Link></td>
    </tr>
}

export default CompainRow;