import Card from 'react-bootstrap/Card';

function CommonCard(props) {
    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src="holder.js/100px180"/>
            <Card.Body>l
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.child}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CommonCard;