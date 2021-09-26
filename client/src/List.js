import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function List(props) {
  return (
    <Container>
    {props.items
      .reduce(function(result, value, index, array) {
        if (index % 2 === 0)
          result.push(array.slice(index, index + 2));
        return result;
      }, [])
      .map(i =>
        <Row key={`${i[0].id}-${i[1].id}`}>
          <Col sm>
            <Card>
              <Card.Img variant="top" src={`https://via.placeholder.com/500/${i[0].color}.png`} />
              <Card.Body>
                <Card.Title>{i[0].title}</Card.Title>
                <Button variant="primary" onClick={_ => props.setDetailsView(i[0].id)}>Details</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card>
              <Card.Img variant="top" src={`https://via.placeholder.com/500/${i[1].color}.png`} />
              <Card.Body>
                <Card.Title>{i[1].title}</Card.Title>
                <Button variant="primary" onClick={_ => props.setDetailsView(i[1].id)}>Details</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    )}
  </Container>
  );
}

export default List;
