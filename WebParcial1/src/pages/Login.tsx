import styles from "./Login.module.scss";
import { Button, Card, Col, Container, Row, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import salad from '../assets/salad.jpg';
import toogood from '../assets/too-good.svg';
import { FormattedMessage, useIntl } from "react-intl";

function Login () {
    const intl = useIntl();
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/home");
    };
    const userPlaceholder = intl.formatMessage({ id: "username" });
    const passPlaceholder = intl.formatMessage({ id: "password" });

    return(
        <Container className={styles.footer} fluid>
            <Row className={styles.row}>
                <Col md={8} className={styles.col1}>
                    <Card className={styles.cardLeft}>
                        <Card.Body>
                            <Card.Img variant="top" src={toogood} className={styles.tinyImage}/>
                            <Card.Title className={styles.title}>TOO GOOD TO GO</Card.Title>
                            <Card.Text className={styles.inside}>
                            <FormattedMessage id="too_goo"/>  
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className={styles.cardLeft}>
                            <Card.Img variant="bottom" src={salad} className={styles.photo}/>
                        </Card.Footer>
                    </Card>    
                </Col>
                <Col md={4} className={styles.col2}>
                    <Card className={styles.cardRight}>
                            <Card.Body>
                                <Form onSubmit={handleLogin}>
                                <Form.Group>
                                    <Form.Control type="text" required placeholder={userPlaceholder} className={styles.roundedInput}/>
                                </Form.Group>
                                    <Form.Group>
                                    <Form.Control type="password" required minLength={5} maxLength={8} placeholder={passPlaceholder} className={styles.roundedInput} />
                                    </Form.Group>
                                    <Button className={`mt-2 ${styles.roundedButton}`} type="submit">
                                    <FormattedMessage id="login"/>  
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;