import React, {useContext} from 'react';
import {Container, Grid, Link} from '@material-ui/core';

import {GlobalStateContext} from '../../context/GlobalContextProvider';

import * as styles from './Footer.module.css';

const Footer = (props) => {
    const state = useContext(GlobalStateContext);
    const theme = state.darkMode ? 'secondary' : 'primary';
    return (
        <Container>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
            >
                <Grid item xs={6} spacing={3}>
                    <p className={styles.smallerscreen}>© 2021 by Ho Chi</p>
                </Grid>
                <Grid item xs={6} spacing={3} style={{textAlign: 'right'}}>
                    <Link className={styles.smallerscreen} color={theme} href="https://github.com/nghochi123/visualizer">Source Code</Link>
                    <Link className={styles.smallerscreen} color={theme} href="https://visualgo.net/en" style={{marginLeft: '10px'}}>Inspiration</Link>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer;