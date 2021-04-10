import React, {useContext} from 'react';
import {Container, Grid, Link} from '@material-ui/core';

import {GlobalStateContext} from '../../context/GlobalContextProvider'; 

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
                <Grid item xs={8} spacing={3}>
                    <p>© 2021 by Ho Chi</p>
                </Grid>
                <Grid item xs={4} spacing={3} style={{textAlign: 'right'}}>
                    <Link color={theme} href="https://github.com/nghochi123/visualizer">Source Code</Link>
                    <Link color={theme} href="https://visualgo.net/en" style={{marginLeft: '10px'}}>Inspiration</Link>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer;