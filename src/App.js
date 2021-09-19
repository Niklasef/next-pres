import './App.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Carousel from 'react-bootstrap/Carousel'

function App() {
  return (
    <Container>
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item><a href='/'>Home</a></ListGroup.Item>
            <ListGroup.Item><a href='/list'>List</a></ListGroup.Item>
            <ListGroup.Item><a href='/feature'>Feature</a></ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          {(window.location.href === 'http://localhost:3000/') &&
            <>
              <h1>Heading</h1>
              <p>paragraph</p>
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/800x400/400.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </>
          }

          {(window.location.href.indexOf("feature") > -1) &&
            <Carousel interval={null}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/800x400/400.png"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/800x400/040.png"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/800x400/004.png"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          }

          {(window.location.href.indexOf("list") > -1) && <Container>
            <Row>
              <Col sm>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/500.png" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/500.png" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col sm>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/500.png" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/500.png" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col sm>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/500.png" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/500.png" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col sm>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/500.png" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/500.png" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col sm>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/500.png" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/500.png" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

          </Container>}

          {(window.location.href.indexOf("details") > -1) &&
            <>
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/800x400/040.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </>
          }
        </Col>
      </Row>
    </Container>
  );
}

export default App;
