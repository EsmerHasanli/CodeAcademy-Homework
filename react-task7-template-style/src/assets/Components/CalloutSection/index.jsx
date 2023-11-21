import React from 'react'
import style from './index.module.css'; 

const CalloutSection = () => {
  return (
    <section id={style.callout} >
      <h1 className={style.title}>Stylish Portfolio</h1>
      <h2 className={style.subtitle}>A Free Bootstrap Theme by Start Bootstrap</h2>
      <button className={style.btn}>Find Out More</button>
    </section>
  )
}

export default CalloutSection