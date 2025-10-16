import { Button, Container,Col,Form,Row } from 'react-bootstrap';

function Userlogin() {
  return (
    <Container className='mt-5'>
        <Row className = "justify-content-md-center">
            <Col md={4}>
                <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                    Email
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="email" placeholder="email@example.com" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Password
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Button variant="primary">
                        Submit
                    </Button>
                </Form.Group>
                </Form>
            </Col>
        </Row>
    </Container>
  );
}

export default Userlogin;