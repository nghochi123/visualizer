import React from 'react';

import {Typography, Table, TableCell, TableContainer, TableRow} from '@material-ui/core';

import * as styles from './description.module.css';

export const QSortDesc = (props) => {
    return (
        <div>
            <Typography variant="h2">Quicksort</Typography><hr/>
            <Typography>Quicksort works by selecting a partition and moving elements larger than the partition to the right of the partition, and elements smaller than the partition to the left.
                This is repeated for the right and left sides of the partition.</Typography><br/>
            <Typography variant="h4">Big O</Typography>
            <TableContainer>
                <Table>
                    <TableRow>
                        <TableCell>Worst Case Time Complexity</TableCell>
                        <TableCell align="right">O(n<sup>2</sup>)</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Best Case Time Complexity</TableCell>
                        <TableCell align="right">O(nlog(n))</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Average Time Complexity</TableCell>
                        <TableCell align="right">O(nlog(n))</TableCell>
                    </TableRow>
                </Table>
                
            </TableContainer>
            
        </div>
    )
}

export const QSortLegend = () => {
    return (
        <div style={{margin: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div className={styles.boxblue}></div>
            <p>Pivot</p>
            <div className={styles.boxred}></div>
            <p>Lower than pivot</p>
            <div className={styles.boxgreen}></div>
            <p>Higher than pivot</p>
            <div className={styles.boxyellow}></div>
            <p>Swapping pivot</p>
        </div>
    )
}

export default QSortDesc;