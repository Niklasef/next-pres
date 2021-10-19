import '../styles/globals.css'

import Link from 'next/link'
import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import { useRouter } from 'next/router'

function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
    <Head>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
    </Head>
    <Container>
      <Row>

        {/* PRIMARY COLUMN */}
        <Col sm={4}>

          {/* MENU */}
          <ListGroup>
            <a href={`/`}>
              <ListGroup.Item active={router.pathname === '/'}>
                Home
              </ListGroup.Item>
            </a>
            <a href={`/list`}>
              <ListGroup.Item active={router.pathname === '/list'}>
                List
              </ListGroup.Item>
            </a>
            <a href={`/feature`}>
              <ListGroup.Item active={router.pathname === '/feature'}>
                Feature
              </ListGroup.Item>
            </a>
          </ListGroup>

        </Col>

        {/* SECONDARY COLUMN */}
        <Col sm={8}>
          <Component {...pageProps} />
        </Col>
      </Row>
    </Container>
  </>
  );
}

export default App;
