import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { formatDate } from '../utils/date';

function CampaignStatistics({campaign}) {
  const {statistics} = campaign

  return (
    <ListGroup as="ol">
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Просмотры</div>
        </div>
        <Badge bg="primary" pill>
          {statistics.views}
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
          {statistics.clicks}
        </Badge>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Эффективность</div>
        </div>
        <Badge bg="primary" pill>
          {statistics.views / statistics.clicks * 100} %
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
          {formatDate(statistics.date)}
        </Badge>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Масштаб компании</div>
        </div>
        <Badge bg="primary" pill>
          {statistics.views > 1000 ? "Большой" : "Маленький"} 
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
          <div className="fw-bold">Бюджет компании</div>
        </div>
        <Badge bg="danger" pill>
          {campaign.budget} 
        </Badge>
      </ListGroup.Item>

    </ListGroup>
  );
}

export default CampaignStatistics;