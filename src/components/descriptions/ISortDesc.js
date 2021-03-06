import React from 'react';

import {Typography, Table, TableCell, TableContainer, TableRow} from '@material-ui/core';

import * as styles from './description.module.css'

export const ISortDesc = (props) => {
    return (
        <div>
            <Typography variant="h2">Insertion Sort</Typography><hr/>
            <Typography>Insertion sort works by building the final sorted array one item at a time. Elements are brought to positions that are correct relative to the sorted section of the array.</Typography><br/>
            <Typography variant="h4">Big O</Typography>
            <TableContainer>
                <Table>
                    <TableRow>
                        <TableCell>Worst Case Time Complexity</TableCell>
                        <TableCell align="right">O(n<sup>2</sup>)</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Best Case Time Complexity</TableCell>
                        <TableCell align="right">O(n)</TableCell>
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

export const ISortLegend = () => {
    return (
        <div style={{margin: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div className={styles.boxyellow}></div>
            <p>Moving</p>
            <div className={styles.boxgreen}></div>
            <p>Sorted relative to items on left</p>
        </div>
    )
}