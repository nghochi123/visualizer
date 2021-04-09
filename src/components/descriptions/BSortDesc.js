import React from 'react';

import {Typography, Table, TableCell, TableContainer, TableRow} from '@material-ui/core';

const BSortDesc = (props) => {
    return (
        <div>
            <Typography variant="h2">Bubble Sort</Typography><hr/>
            <Typography>Bubble sort works by repeatedly swapping adjacent elements if they are in the wrong order. The largest element passes through to the end of the list, and this repeats until all elemnts are sorted.</Typography><br/>
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

export default BSortDesc;