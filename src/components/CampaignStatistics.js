import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

function CampaignStatistics() {
  return (
    <ListGroup as="ol">
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Конверсия</div>
        </div>
        <Badge bg="primary" pill>
          143
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Клики</div>
        </div>
        <Badge bg="primary" pill>
          43534543
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Просмотры</div>
        </div>
        <Badge bg="primary" pill>
          345436546
        </Badge>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default CampaignStatistics;