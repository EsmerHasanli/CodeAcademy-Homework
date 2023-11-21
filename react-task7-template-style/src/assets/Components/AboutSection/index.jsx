import React from "react";
import style from "./index.module.css";
import Container from "../Container/index.jsx";

const AboutSection = () => {
  return (
    <div style={{backgroundColor:"rgb(248,249,250)"}}>
        <Container>
        <section id={style.portfolio}>
            <h1 className={style.title}> Stylish Portfolio is the perfect theme for your next project!</h1>
            <h2 className={style.subtitle}>This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at <a href="#">Unsplash</a> !</h2>
            <button className={style.btn}>What We Offer</button>
        </section>
        </Container>
    </div>
  );
};

export default AboutSection;
