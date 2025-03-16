import styles from "./Parts.module.scss";
import React from "react";
import { Container, Navbar, Carousel, Row, Col, Card } from "react-bootstrap";
import cart from "../assets/cart.svg";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { FormattedMessage } from "react-intl";

interface ApiData{
    image: string;
    food: string
}

function Cart () {

    async function  getData() {
        const  response = await axios.get<ApiData[]>(
            "https://my.api.mockaroo.com/food.json?key=60a38cc0"
        );
        return response.data;
    }

    const {isSuccess, data } = useQuery({
        queryKey: ["apiData"],
        queryFn: getData,
    })


    return (
        <div>
      <Navbar style={{ backgroundColor: "rgb(16, 99, 114)" }} className="justify-content-center p-3">
        <Navbar.Brand className="fs-3 text-uppercase text-white"
        style={{
            fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
            fontSize: "2rem",
            fontWeight: "bold",
          }}>
        <img src={cart} alt="Cart" className={styles.icon}/>
        <FormattedMessage id="CART"/>
        <img src={cart} alt="Cart" className={styles.icon}/>
        </Navbar.Brand>
      </Navbar>

      <Container fluid className="mt-4">
        <Carousel>
        {isSuccess &&
            data.slice(0, 3).map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  src={item.image}
                  className={`${styles.img} d-block w-100`}
                  alt="Slide"
                />
              </Carousel.Item>
            ))}
        </Carousel>
      </Container>

      <Container className="mt-5">
        <Row className="g-4">
            {isSuccess && 
            data.map((item, idx) => (
                <Col key={idx} md={3}>
                  <Card >
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body className={`text-center ${styles.custom_card_title}`}>
                      <Card.Title >{item.food}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
        </Row>
      </Container>
    </div>
    );

};

export default Cart;