import React from 'react'
import style from './index.module.css'; 

const HeroSection = () => {
  return (
    <section id={style.hero} >
      <h1 className={style.heroTitle}>Stylish Portfolio</h1>
      <h2 className={style.heroSubtitle}>A Free Bootstrap Theme by Start Bootstrap</h2>
      <button className={style.btn}>Find Out More</button>
    </section>
  )
}

export default HeroSection