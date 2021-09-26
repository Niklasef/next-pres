import Card from 'react-bootstrap/Card'

function Details(props) {
  return (
    <Card>
    <Card.Img variant="top" src={`https://via.placeholder.com/500/${props.item.color}.png`} />
    <Card.Body>
      <Card.Title>{props.item.title}</Card.Title>
      <Card.Text>{props.item.description}</Card.Text>
    </Card.Body>
  </Card>
  );
}

export default Details;
