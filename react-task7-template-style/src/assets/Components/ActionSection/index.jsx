import React from 'react'
import style from './index.module.css'; 

const ActionSection = () => {
  return (
    <section id={style.action} >

        <h1 className={style.title}>The buttons below are impossible to resist...</h1>

        <div>
        <a href='#' className={style.btn}>Click Me!</a>
        <a href='#' className={style.btn} style={{backgroundColor:"rgb(33,37,41)", borderColor:"rgb(33,37,41)", color:"white"}}>Look At Me!</a>
        </div>

    </section>
  )
}

export default ActionSection