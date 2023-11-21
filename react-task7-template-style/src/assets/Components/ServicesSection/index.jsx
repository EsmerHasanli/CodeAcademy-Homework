import React from "react";
import style from "./index.module.css";
import Container from "../Container/index.jsx";
import Row from "../Row/index.jsx";
import Col from "../Col/index.jsx";

const ServicesSection = () => {
  return (
    <>
      <section id={style.services}>
        <Container>
            <div className={style.servicesTitle}>
              <h1 className={style.title}> SERVICES</h1>
              <h2 className={style.subtitle}>What We Offer</h2>
            </div>
            <div >
          <Row className={style.wrapper}>
              
              <Col xs={12} sm={6} md={4} lg={3}>
                <div className={style.card}>
                  <div className={style.cardImage}>
                  </div>
                  <div className={style.cardTitle}>Responsive</div>
                  <div className={style.cardDescr}>Looks great on any screen size!</div>
                </div>
              </Col>

              <Col xs={12} sm={6} md={4} lg={3}>
                <div className={style.card}>
                  <div className={style.cardImage}>
                  </div>
                  <div className={style.cardTitle}>Responsive</div>
                  <div className={style.cardDescr}>Looks great on any screen size!</div>
                </div>
              </Col>

              <Col xs={12} sm={6} md={4} lg={3}>
                <div className={style.card}>
                  <div className={style.cardImage}>
                  </div>
                  <div className={style.cardTitle}>Responsive</div>
                  <div className={style.cardDescr}>Looks great on any screen size!</div>
                </div>
              </Col>

              <Col xs={12} sm={6} md={4} lg={3}>
                <div className={style.card}>
                  <div className={style.cardImage}>
                  </div>
                  <div className={style.cardTitle}>Responsive</div>
                  <div className={style.cardDescr}>Looks great on any screen size!</div>
                </div>
              </Col>

          </Row>
            </div>
        </Container>
      </section>
    </>
  );
};

export default ServicesSection;
