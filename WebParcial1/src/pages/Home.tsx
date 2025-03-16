import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import styles from "./Home.module.scss"
import { useNavigate } from "react-router";



function Home () {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/home");
    };
    return (
        <Container className={styles.login_container} fluid>
            <Row className={`d-flex justify-content-center`}>
                <Col className="col-auto">
                    <Card className={styles.login_card}>
                        <Card.Body>
                            <Card.Title className={``}> Log In</Card.Title>
                            <Form onSubmit={handleLogin}>
                            <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" required/>
                            </Form.Group>
                                <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" required/>
                                </Form.Group>
                                <Button className="mt-2" type="submit">
                                Login
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;