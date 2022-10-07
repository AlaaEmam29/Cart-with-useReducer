import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useGlobalContext } from "../../context/context";

export default function Total() {
    const { total } = useGlobalContext();
    return <Box
        sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 2,
        }}>
        <Typography variant="h6" component="div" >
            Total
        </Typography>
        <Typography variant="h6" component="div" >
            $ {total}
        </Typography>

    </Box>;
}
