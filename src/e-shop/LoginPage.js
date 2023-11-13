import React, { useState } from 'react'
import './style/LoginStyle.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
// import Typography from '@mui/material/Typography';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { toast } from 'react-toastify';
import axios from 'axios';
import { baseUrlLogin } from '../config';
import { Link } from 'react-router-dom';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const LoginPage = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [inputData, setInputData] = useState({
        userName: "",
        userEmail: "",
        userPassword: ""
    });

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const loginData = () => {
        console.log(
            inputData
        );
        if (!inputData.userName ||
            !inputData.userEmail ||
            !inputData.userPassword) {
                toast.warn('Please fill all the feilds !',{
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                })
        } else {
            const newData = {
                username : inputData.userName,
                email : inputData.userEmail,
                password : inputData.userPassword,
            }
            const postUser = {
                user : newData,
            }
            console.log(newData)
            axios.post(`${baseUrlLogin}/api/users`,postUser).then((res)=>{
                console.log('response-->',res);
                if(res.status === 201){
                    localStorage.setItem("userData",JSON.stringify(res.data.user));
                    window.location.reload();
                }
            }).catch(e => console.log('error-->',e));
        }

    }
    
    return (
        <div className='loginMain'>
            <div className="container">
                <Card sx={{ width: 475, height: 500, margin: '0 auto 0', justifyContent: 'center', marginTop: '40px', opacity: '80%' }}>
                    <CardContent>
                        <img src="https://png.pngtree.com/png-vector/20220601/ourmid/pngtree-shop-logo-design-with-a-handshake-in-bag-png-image_4749125.png" alt=""
                            style={{ width: '90px', height: '90px', borderRadius: '90px' }}
                        />
                        <h3 className='display-5 my-1'>
                            Sign in
                        </h3>
                        <span className='my-3'>Sign in with your username & password</span>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic" label="Username" variant="outlined" value={inputData.userName}
                                onChange={(e) => setInputData({ ...inputData, userName: e.target.value })}
                            />
                            <TextField id="outlined-basic" label="Your Email" variant="outlined" value={inputData.userEmail}
                                onChange={(e) => setInputData({ ...inputData, userEmail: e.target.value })}
                            />
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" >
                                <InputLabel htmlFor="outlined-adornment-password">Your Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Your Password"
                                    value={inputData.userPassword}
                                    onChange={(e) => setInputData({ ...inputData, userPassword: e.target.value })}
                                />
                            </FormControl>

                        </Box>
                    </CardContent>
                    <CardActions>
                        {/* <Button size="small">Learn More</Button> */}
                        {/* <Button variant="text" style={{ margin: '0 auto 0' }}>Register Now</Button> */}
                        <Button variant="contained" style={{ margin: '0 auto 0' }}
                            onClick={() => loginData()}
                        >
                            Sign in
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}

export default LoginPage
