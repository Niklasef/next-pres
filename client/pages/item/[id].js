import Card from 'react-bootstrap/Card'


function Item({item}) {
  return (
    <Card>
      <Card.Img variant="top" src={`https://via.placeholder.com/500/${item.color}.png`} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export async function getStaticPaths() {
    const res = await fetch('http://localhost:5000/api/items');
    const items = await res.json();
    const paths = items.map(item => `/item/${item.id}`);
    return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:5000/api/item/${params.id}`);
  const item = await res.json();
  return { props: { item } };
}

export default Item;
