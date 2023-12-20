import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import style from './style.module.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Hero = () => {
  return (
    <section className={style.hero}>
        <Container style={{maxWidth:'1903px'}}>
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <Item>xs=8</Item>
                </Grid>
                
                <Grid item xs={3}>
                    <aside>
                        <h2 style={{textAlign: 'center', marginBottom: '20px'}}>MOST READ</h2>
                        <ul>
                            <li className={style.listStyle}>
                                <p className={style.num}>1</p>
                                <p>
                                    <span className={style.subheader}>U.S</span>
                                    <br />
                                    <span>What to Know About Washington’s Scandal Over Sex in a Senate Hearing Room</span>
                                </p>
                            </li>
                        </ul>
                    </aside>
                </Grid>
            </Grid>
        </Container>
    </section>
  )
}

export default Hero