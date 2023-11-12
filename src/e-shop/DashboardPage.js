import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { Grid, Paper } from '@mui/material'
import axios from 'axios';
import { baseUrlLogin } from '../config';

const DashboardPage = () => {

    const [spacing, setSpacing] = React.useState(2);

    const getItems = () =>{
        axios.get(`${baseUrlLogin}/api/articles`).then((res)=>{
            console.log(res.data.articles)
        }).catch((e=>console.log(e)))
    }
    useEffect(()=>{
        getItems();
    },[]);

    // const handleChange = (event) => {
    //   setSpacing(Number(event.target.value));
    // };
    return (
        <>
            <div className='dashboard'>
                <Navbar/>
                <div className="row" style={{backgroundImage: "url('https://img.freepik.com/premium-photo/shopping-cart-full-gifts_934971-572.jpg')", height:'300px'}}>
                    <h2 className="display-5" style={{color:'white', fontWeight:700, textAlign:'center',marginTop:'60px'}}>
                        NEW SEASON ARRIVALS
                    </h2>
                    <h2 style={{color:'white', fontWeight:400, textAlign:'center', marginTop:'-80px'}}>
                        CHECK OUT ALL THE TRENDS
                    </h2>
                </div>
                <div className="conrainer my-5">
                    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                        <Grid item xs={12}>
                            <Grid container justifyContent="center" spacing={spacing}>
                                {[0, 1, 2, 3].map((value) => (
                                    <Grid key={value} item>
                                        <Paper
                                            sx={{
                                                height: 215,
                                                width: 156,
                                                backgroundColor: (theme) =>
                                                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                            }}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>

    )
}

export default DashboardPage
