import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Link from 'next/link'

function List({items}) {
  return (
    <Container>
    {items
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
                <Link href={`/item/${i[0].id}`}>
                  <a className="btn btn-primary active" role="button">Details</a>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card>
              <Card.Img variant="top" src={`https://via.placeholder.com/500/${i[1].color}.png`} />
              <Card.Body>
                <Card.Title>{i[1].title}</Card.Title>
                <Link href={`/item/${i[1].id}`}>
                  <a className="btn btn-primary active" role="button">Details</a>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    )}
  </Container>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:5000/api/items');
  const items = await res.json();
  return { props: { items } };
}

export default List;
