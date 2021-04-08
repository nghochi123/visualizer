import React from 'react';
import {Container, Grid} from '@material-ui/core';

import * as styles from './Footer.module.css'

const Footer = (props) => {
    return (
        <Container>
            <Grid
                container
                direction="row"
                justify="left"
                alignItems="center"
            >
                <Grid item xs={8} spacing={3}>
                    <p>© 2021 by Ho Chi</p>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer;