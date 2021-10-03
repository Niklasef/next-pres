import Carousel from 'react-bootstrap/Carousel'


function List({items}) {
  return (
    <Carousel interval={null}>
      {items
        .map(i =>
          <Carousel.Item key={`${i.title}-${i.id}`}>
            <img
              className="d-block w-100"
              src={`https://via.placeholder.com/800x400/${i.color}.png`}
              alt={i.title}
            />
            <Carousel.Caption>
              <h3>{i.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        )}
    </Carousel>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:5000/api/feature-items');
  const items = await res.json();
  return { props: { items } };
}

export default List;
