import './App.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import { useEffect, useState } from 'react';

import Home from './Home';
import Feature from './Feature';
import List from './List';
import Details from './Details';

function App() {

  const call = async (api) => {
    const response = await fetch(`/api/${api}`);
    const body = await response.json();
    if (response.status !== 200)
      throw Error(body.message);
    return body;
  };

  const [items, setItems] = useState(undefined);
  const [item, setItem] = useState(undefined);
  const [featuredItem, setFeaturedItem] = useState(undefined);
  const [featureItems, setFeatureItems] = useState(undefined);

  const [activeMenuItem, setActiveMenuItem] = useState(undefined);
  const [currentView, setCurrentView] = useState(['featured-item', undefined, setFeaturedItem]);
  useEffect(
    () => {
      setActiveMenuItem(currentView[0]);
      call(
        `${currentView[0]}${currentView[1] 
          ? '/'+currentView[1] 
          : ''}`)
        .then(data =>
          currentView[2](data));
      },
    [currentView]);  

  return (
    <Container>
      <Row>

        {/* PRIMARY COLUMN */}
        <Col sm={4}>

          {/* MENU */}
          <ListGroup>
            <ListGroup.Item
              onClick={_ => setCurrentView(['featured-item', undefined, setFeaturedItem])}
              active={activeMenuItem === 'featured-item'}>
                Home
            </ListGroup.Item>
            <ListGroup.Item
              onClick={_ => setCurrentView(['items', undefined, setItems])}
              active={activeMenuItem === 'items'}>
                List
            </ListGroup.Item>
            <ListGroup.Item
              onClick={_ => setCurrentView(['feature-items', undefined, setFeatureItems])}
              active={activeMenuItem === 'feature-items'}>
                Feature
            </ListGroup.Item>
          </ListGroup>

        </Col>

        {/* SECONDARY COLUMN */}
        <Col sm={8}>

          {/* HOME */}
          {(currentView[0] === 'featured-item') && featuredItem &&
            <Home
              item={featuredItem}
              setDetailsView={id => setCurrentView(['item', `${id}`, setItem])}
            ></Home>
          }

          {/* FEATURE */}
          {(currentView[0] === 'feature-items') && featureItems &&
            <Feature
              items={featureItems}
            ></Feature>
          }

          {/* LIST */}
          {(currentView[0] === 'items') && items &&
            <List
              items={items}
              setDetailsView={id => setCurrentView(['item', `${id}`, setItem])}
            ></List>
          }

          {/* DETAILS */}
          {(currentView[0] === 'item') && item &&
            <Details
              item={item}
            ></Details>
          }

        </Col>
      </Row>
    </Container>
  );
}

export default App;
