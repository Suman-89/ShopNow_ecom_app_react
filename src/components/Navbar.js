import React from 'react';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigation = useNavigate();

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));


    const logoutFunc = () => {
        localStorage.removeItem("userData");
        window.location.reload();
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <img src="https://png.pngtree.com/png-vector/20220601/ourmid/pngtree-shop-logo-design-with-a-handshake-in-bag-png-image_4749125.png" alt=""
                                style={{ width: '90px', height: '90px', borderRadius: '90px' }}
                            />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ cursor: 'pointer' }} onClick={() => navigation('/')}>
                            Dashboard
                        </Typography>
                        <IconButton aria-label="cart" style={{ marginRight: '100px' }} onClick={()=>navigation('/cart')}>
                            <StyledBadge badgeContent={4} color="secondary">
                                <ShoppingCartIcon/>
                            </StyledBadge>
                        </IconButton>
                        <Button color="inherit" onClick={() => logoutFunc()}>
                            Logout
                        </Button>
                        {/* <Link to='/'>loginpage</Link> */}
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Navbar
