import Carousel from 'react-bootstrap/Carousel'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import {useState} from 'react'
import { useRouter } from 'next/router'


function Feature({items}) {
  const [id, setId] = useState();
  const router = useRouter();  
  const refreshData = () => router.replace(router.asPath);
  const addItem = async() => {
    const ids = JSON.parse(document.cookie.split('=')[1]);
    ids.push(parseInt(id));
    document.cookie = `feature-item-ids=${JSON.stringify(ids)};Max-Age=2592000`;
    refreshData();
  };

  return (
    <>
      <Carousel interval={null}>
        {items
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
          onClick={_ => addItem()}
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

export const  getServerSideProps = async(ctx) => {
  const { req, res } = ctx;
  const {cookies} = req;
  let featureItemIds = [];
  if(!cookies['feature-item-ids']) {
    res.setHeader(
      'set-cookie', 
      `feature-item-ids=${JSON.stringify(featureItemIds)};Max-Age=2592000`);
  } else {
    featureItemIds = JSON.parse(cookies['feature-item-ids']);
  }

  const response = await fetch(`http://localhost:5000/api/feature-items/${JSON.stringify(featureItemIds)}`);
  const items = await response.json();
  return { props: { items } };
}

export default Feature;
