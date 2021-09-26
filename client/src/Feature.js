import Carousel from 'react-bootstrap/Carousel'

function Feature(props) {
  return (
    <Carousel interval={null}>
      {props.items
        .map(i =>
          <Carousel.Item>
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

export default Feature;
