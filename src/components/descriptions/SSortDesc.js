import React from 'react';

import {Typography, Table, TableCell, TableContainer, TableRow} from '@material-ui/core';

import * as styles from './description.module.css'

export const SSortDesc = (props) => {
    return (
        <div>
            <Typography variant="h2">Selection Sort</Typography><hr/>
            <Typography>Selection sort works by moving elements into their respective positions one at a time. All elements are compared to find the smallest element, which is placed at the beginning, then followed by the second smallest
                element, and so on.</Typography><br/>
            <Typography variant="h4">Big O</Typography>
            <TableContainer>
                <Table>
                    <TableRow>
                        <TableCell>Worst Case Time Complexity</TableCell>
                        <TableCell align="right">O(n<sup>2</sup>)</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Best Case Time Complexity</TableCell>
                        <TableCell align="right">O(n<sup>2</sup>)</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Average Time Complexity</TableCell>
                        <TableCell align="right">O(n<sup>2</sup>)</TableCell>
                    </TableRow>
                </Table>
                
            </TableContainer>
            
        </div>
    )
}

export const SSortLegend = () => {
    return (
        <div style={{margin: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div className={styles.boxyellow}></div>
            <p>Searching for lowest</p>
            <div className={styles.boxred}></div>
            <p>Current lowest</p>
            <div className={styles.boxgreen}></div>
            <p>Sorted</p>
        </div>
    )
}
