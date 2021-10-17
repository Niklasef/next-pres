import Carousel from 'react-bootstrap/Carousel'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react'

function Feature(props) {
  const [id, setId] = useState();

  useEffect(
    () => {
      props.call(
        `feature-items/${JSON.stringify(props.itemIds)}`)
        .then(data =>
          props.setItems(data));
      localStorage.setItem('feature-item-ids', JSON.stringify(props.itemIds));
    },
    [props.itemIds]);  

  return (
    <>
      <Carousel interval={null}>
        {props.items
          .map(i =>
            <Carousel.Item key={i.title}>
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

      <InputGroup className="mb-3">
        <Button 
          onClick={_ => props.setItemIds(
            props.itemIds.concat(parseInt(id)))}
          variant="outline-secondary" 
          id="button-addon1">
          Add
        </Button>
        <FormControl
          aria-label="1"
          aria-describedby="basic-addon1"
          name="item-id"
          value={id || ''}
          onChange={e => setId(e.target.value)}
        />
      </InputGroup>
    </>
  );
}

export default Feature;
