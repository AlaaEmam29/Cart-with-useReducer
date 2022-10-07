import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useGlobalContext } from "../../context/context";


export default function Navbar() {
    const { amount } = useGlobalContext();
    return <>
        <Box sx={{
            flexGrow: 1,

        }}>
            <AppBar
                sx={{

                    p: 1
                }}
                position="static">
                <Toolbar>

                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Cart
                    </Typography>

                    <IconButton>
                        <Badge
                            sx={{ "& .MuiBadge-badge": { fontSize: 15} }}

                            badgeContent={amount} color="secondary">
                            <ShoppingCartIcon sx={{ width: 40, height: 40, color: '#fff' }} />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>

    </>;
}
