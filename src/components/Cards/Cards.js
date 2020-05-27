import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';

const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed){
        return 'loading....';
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)} style={{backgroundColor: 'rgba(255,255,255, 0.92)'}}>
                    <CardContent>

                        <Typography color='textSecondary' gutterBottom>Infected</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0}  end={confirmed.value} duration={2.5} separator=',' />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()} </Typography>
                        <br/>
                        <Typography variant='body2'> Number of Active cases </Typography>

                    </CardContent>

                </Grid>

                <Grid item component={Card } xs={12} md={3} className={cx(styles.card, styles.recovered)} style={{backgroundColor: 'rgba(255,255,255, 0.92)'}}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0}  end={recovered.value} duration={2.5} separator=',' />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()} </Typography>
                        <br/>
                        <Typography variant='body2'> Number of Recovered cases </Typography>

                    </CardContent>

                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.death)} style={{backgroundColor: 'rgba(255,255,255, 0.92)'}}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Death</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0}  end={deaths.value} duration={2.5} separator=',' />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()} </Typography>
                        <br/>
                        <Typography variant='body2'> Number of Death caused by covid-19 </Typography>

                    </CardContent>

                </Grid>
            </Grid>
           
        </div>
    );
}

export default Cards;