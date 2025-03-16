import styles from "./Parts.module.scss";
import React from "react";
import { Container, Navbar, Carousel, Row, Col, Card } from "react-bootstrap";
import menu from "../assets/menu.svg"

interface ApiData{
    image: string;
    food: string
}

function Menu () {
    
    

    return (
        <div>
      <Navbar style={{ backgroundColor: "rgb(16, 99, 114)" }} className="justify-content-center p-3">
        <Navbar.Brand className="fs-3 text-uppercase text-white"
        style={{
            fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
            fontSize: "2rem",
            fontWeight: "bold",
          }}>
        <img src={menu} alt="Stores" className={styles.icon}/>
            Menu
        <img src={menu} alt="Stores" className={styles.icon}/>
        </Navbar.Brand>
      </Navbar>

      <Container fluid className="mt-4">
        <Carousel>
          <Carousel.Item>
            <img
              className={`${styles.img} d-block w-100`}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZEH2iNVL709lCDoFPW91t2zxx-CAERDsIg&s"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={`${styles.img} d-block w-100`}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZEH2iNVL709lCDoFPW91t2zxx-CAERDsIg&s"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={`${styles.img} d-block w-100`}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZEH2iNVL709lCDoFPW91t2zxx-CAERDsIg&s"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container className="mt-5">
        <Row className="g-4">
          {[
            { title: "Cheese", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZEH2iNVL709lCDoFPW91t2zxx-CAERDsIg&s" },
            { title: "Bread", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZEH2iNVL709lCDoFPW91t2zxx-CAERDsIg&s" },
            { title: "Ham", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZEH2iNVL709lCDoFPW91t2zxx-CAERDsIg&s" },
            { title: "Lettuce", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZEH2iNVL709lCDoFPW91t2zxx-CAERDsIg&s" },
          ].map((item, idx) => (
            <Col key={idx} md={3}>
              <Card >
                <Card.Img variant="top" src={item.img} />
                <Card.Body className={`text-center ${styles.custom_card_title}`}>
                  <Card.Title >{item.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
    );

};

export default Menu;