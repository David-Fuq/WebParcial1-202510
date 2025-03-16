import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import styles from "./Home.module.scss"
import { useNavigate } from "react-router";
import menu from "../assets/menu.svg";
import stores from "../assets/stores.svg";
import cart from "../assets/cart.svg";
import { FormattedMessage, useIntl } from "react-intl";



function Home () {
    const navigate = useNavigate();
    const handleMenu = () => {
        navigate("/menu");
    };
    const handleStores = () => {
        navigate("/stores");
    };
    const handleCart = () => {
        navigate("/cart");
    };
    return (
        <Container className={styles.login_container} fluid>
            <Row className={`d-flex justify-content-center`}>
                <Col className={`col-auto ${styles.rounded_col}`}>
                    <Card className={styles.login_card}>
                    <Card.Body className={`d-flex justify-content-between align-items-center ${styles.card_body}`}>
                    <Row className="w-100 d-flex justify-content-between text-center">
                                <Col>
                                    <img src={menu} alt="Menu" className={styles.icon} onClick={handleMenu}/>
                                    <p className={styles.icon_text}><FormattedMessage id="menu"/></p>
                                </Col>
                                <Col>
                                    <img src={stores} alt="Stores" className={styles.icon} onClick={handleStores} />
                                    <p className={styles.icon_text}><FormattedMessage id="stores"/></p>
                                </Col>
                                <Col>
                                    <img src={cart} alt="Cart" className={styles.icon} onClick={handleCart}/>
                                    <p className={styles.icon_text}><FormattedMessage id="cart"/></p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;