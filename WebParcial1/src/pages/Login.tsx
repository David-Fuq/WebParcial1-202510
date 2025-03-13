import styles from "./Login.module.scss";
import { Button, Card, Col, Container, Row, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import salad from '../assets/salad.jpg'
import toogood from '../assets/too-good.svg'

function Login () {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/home");
    };
    return(
        <>
        <Container className={styles.footer} fluid>
            <Row className={styles.row}>
                <Col md={8} className={styles.col1}>
                    <Card>
                        <Card.Body>
                            <Card.Img variant="top" src={toogood} className={styles.tinyImage}/>
                            <Card.Title className={styles.title}>TOO GOOD TO GO</Card.Title>
                            <Card.Text className={styles.inside}>
                            FOOD WASTING SOLUTION  
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Card.Img variant="bottom" src={salad} className={styles.photo}/>
                        </Card.Footer>
                    </Card>    
                </Col>
                <Col md={4} className={styles.col2}>
                    <Card>
                            <Card.Body>
                                <Form onSubmit={handleLogin}>
                                <Form.Group>
                                    <Form.Control type="email" required placeholder="Username" className={styles.roundedInput}/>
                                </Form.Group>
                                    <Form.Group>
                                    <Form.Control type="password" required minLength={5} maxLength={8} placeholder="password" className={styles.roundedInput} />
                                    </Form.Group>
                                    <Button className={`mt-2 ${styles.roundedButton}`} type="submit">
                                    Login
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default Login;