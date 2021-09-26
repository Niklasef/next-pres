import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Home(props) {
  return (
    <>
    <h1>Heading</h1>
    <p>paragraph</p>
    <Card>
      <Card.Img variant="top" src={`https://via.placeholder.com/500/${props.item.color}.png`} />
      <Card.Body>
        <Card.Title>{props.item.title}</Card.Title>
        <Button variant="primary" onClick={_ => props.setDetailsView(props.item.id)}>Details</Button>
      </Card.Body>
    </Card>
  </>
  );
}

export default Home;
