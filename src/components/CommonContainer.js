import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CommonContainer({title, children}) {
return <Container className="mt-4">
    <Row>
        <Col></Col>
        <Col className="border p-3" xs={12}>
            <h1 className="text-center">{title}</h1>
            {children}
            </Col>
        <Col></Col>
    </Row>
</Container>
}

export default CommonContainer;