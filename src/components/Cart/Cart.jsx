import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useGlobalContext } from "../../context/context";
export default function Cart() {
    const { cart, removeSingleItem, increaseAmount, decreaseAmount } = useGlobalContext();
    return <React.Fragment>
        <Grid container spacing={2} sx={{
            pt: 4,
        }}>
        {
            cart.map((item) => {
                const { id, title, price, img, amount } = item;
                return <Grid key={id} item xs={12} >
                    <List sx={{ width: '100%' }}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar alt={title} src={img} sx={{ width: 120, height: 120 }}/>
                            </ListItemAvatar>

                            <ListItemText
                                primaryTypographyProps={{ fontSize: '1.7rem' }}
                                secondaryTypographyProps={{ fontSize: '20px' }}

                                primary={title} secondary={
                                    <div>
                                        <div>$ {price}</div>
                                        <div
                                            onClick={() => removeSingleItem(id)}
                                            className="remove">
                                            remove
                                        </div>
                                    </div>
                                }
                            />
                            <Box edge="end"
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',

                                }}>
                                <KeyboardArrowUpIcon
                                    sx={{
                                        color: 'primary.main',
                                        width: 40,
                                        height: 40,
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => increaseAmount(id)}
                                />
                                <Typography component={'span'} variant={'body2'} sx={{
                                    fontWeight: 'bold',
                                    fontSize: 24,
                                }}>
                                    {amount}
                                </Typography>
                                <KeyboardArrowDownIcon
                                    sx={{
                                        color: 'primary.main',
                                        width: 40,
                                        height: 40,
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => decreaseAmount(id, amount)}
                                />
                            </Box>

                        </ListItem>
                    </List>
                </Grid>
            })
        }
            
            </Grid>



    </React.Fragment>;
}
