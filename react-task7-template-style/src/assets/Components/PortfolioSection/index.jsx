import React from 'react'
import style from './index.module.css'; 
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';

const PortfolioSection = () => {
  return (
    <section id={style.portfolio} >

        <h1 className={style.title}>PORTFOLIO</h1>
        <h2 className={style.subtitle}>Recent Projects</h2>

      <Container>
        <Row>
            <Col lg={6} md={12} xs={12}>
                <div className={style.item}>
                    <div>
                        <span>Stationary</span>
                        <p>A yellow pencil with envelopes on a clean, blue backdrop!</p>
                    </div>
                    <img src="https://startbootstrap.github.io/startbootstrap-stylish-portfolio/assets/img/portfolio-1.jpg" alt="" />
                </div>
            </Col>

            <Col lg={6} md={12} xs={12}>
                <div className={style.item}>
                    <div>
                        <span>Stationary</span>
                        <p>A yellow pencil with envelopes on a clean, blue backdrop!</p>
                    </div>
                    <img src="https://startbootstrap.github.io/startbootstrap-stylish-portfolio/assets/img/portfolio-2.jpg" alt="" />
                </div>
            </Col>

            <Col lg={6} md={12} xs={12}>
                <div className={style.item}>
                    <div>
                        <span>Stationary</span>
                        <p>A yellow pencil with envelopes on a clean, blue backdrop!</p>
                    </div>
                    <img src="https://startbootstrap.github.io/startbootstrap-stylish-portfolio/assets/img/portfolio-3.jpg" alt="" />
                </div>
            </Col>

            <Col lg={6} md={12} xs={12}>
                <div className={style.item}>
                    <div>
                        <span>Stationary</span>
                        <p>A yellow pencil with envelopes on a clean, blue backdrop!</p>
                    </div>
                    <img src="https://startbootstrap.github.io/startbootstrap-stylish-portfolio/assets/img/portfolio-4.jpg" alt="" />
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PortfolioSection