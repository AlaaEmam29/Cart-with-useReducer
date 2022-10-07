import React from "react";
import Typography from '@mui/material/Typography';

export default function Empty() {
    return <div>
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 ,py:8}}>
            YOUR CART IS EMPTY
        </Typography>
    </div>;
}
