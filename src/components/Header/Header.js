import React, {useContext} from 'react';
import {Grid, Switch} from '@material-ui/core';

import { GlobalStateContext,GlobalDispatchContext} from '../../context/GlobalContextProvider';

import * as styles from './Header.module.css';

const Header = (props) => {
    const state = useContext(GlobalStateContext);
    const dispatch = useContext(GlobalDispatchContext);
    return (
        <header className={styles.header}>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={6}>
                    <div style={{display: 'flex'}}>
                        <p style={{fontSize: '1.5rem'}}>Visualisation</p>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div style={{display: 'flex', justifyContent: 'right'}}>
                        <p className={styles.mleft}>
                            Toggle Dark Mode
                            <Switch 
                                checked={state.darkMode} 
                                onChange={()=>dispatch({type:'TOGGLE_THEME'})} 
                                inputProps={{ 'aria-label': 'primary checkbox' }} 
                                color="primary"
                            />
                        </p>
                    </div>
                </Grid>
            </Grid>
            <nav>
            </nav>
        </header>
    )
}

export default Header;