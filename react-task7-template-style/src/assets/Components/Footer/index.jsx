import React from 'react'
import style from './index.module.css'; 

const Footer = () => {
  return (
    <section id={style.footer}>
        <ul className={style.links}>
            <li className={style.linkItems}></li>
            <li className={style.linkItems}></li>
            <li className={style.linkItems}></li>
        </ul>

        <article className={style.copyright}>Copyright © Your Website 2023</article>
    </section>
  )
}

export default Footer