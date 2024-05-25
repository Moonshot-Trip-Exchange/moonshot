import { Box, Typography } from '@mui/material';
import React from 'react';
import { FromFilter } from './FromFilter';
import { ToFilter } from './ToFilter';
import { DateFilter } from './DateFilter';


export const FilterWrapper = () => {
    return (
        <Box sx={{width: 600, padding: 3}}>
            {/* <Typography variant="h5">Filters</Typography> */}

            <FromFilter />
            <hr style={{border: '1px solid gray' }}/>
            <ToFilter/>
            <hr style={{border: '1px solid gray' }}/>

            <DateFilter />
            

        </Box>
    );
}