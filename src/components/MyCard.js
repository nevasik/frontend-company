import { Badge, Button, ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { formatDate } from '../utils/date';


function MyCard({campaign, progress, startProgress}) {
    const {statistics} = campaign

  return (
    <Card className='rounded mx-auto d-block' style={{ width: '30rem' }}>
      <Card.Img variant="top" src={campaign.avatar} />
      <Card.Body>
        <Card.Title>{"компания " + campaign.name}</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Бюджет компании</div>
        </div>
        <Badge bg="danger" pill>
          {campaign.budget} 
        </Badge>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Целевая аудитория</div>
        </div>
        <Badge bg="primary" pill>
          {campaign.targetAudience} 
        </Badge>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Дата основания</div>
        </div>
        <Badge bg="primary" pill>
          {formatDate(campaign.startDate)}
        </Badge>
      </ListGroup.Item>

      </ListGroup>
      
      <Card.Body>
        {progress===0 && <Button  onClick={startProgress}>Показать статистику</Button>}
      </Card.Body>
    </Card>
  );
}

export default MyCard;