import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Grid, IconButton, Paper, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { baseUrlLogin } from '../config';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const DashboardPage = () => {

    const [spacing, setSpacing] = React.useState(2);
    const [shopItem, setShopItem] = React.useState([]);
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const getItems = () => {
        axios.get(`${baseUrlLogin}/api/articles`).then((res) => {
            console.log(res.data.articles)
            setShopItem(res.data.articles)
        }).catch((e => console.log(e)))
    }
    useEffect(() => {
        getItems();
    }, []);

    return (
        <>
            <div className='dashboard'>
                <Navbar />
                <div className="row" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/shopping-cart-full-gifts_934971-572.jpg')", height: '300px' }}>
                    <h2 className="display-5" style={{ color: 'white', fontWeight: 700, textAlign: 'center', marginTop: '60px' }}>
                        NEW SEASON ARRIVALS
                    </h2>
                    <h2 style={{ color: 'white', fontWeight: 400, textAlign: 'center', marginTop: '-80px' }}>
                        CHECK OUT ALL THE TRENDS
                    </h2>
                </div>
                <div className="conrainer my-5">
                    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                        <Grid item xs={12}>
                            <Grid container justifyContent="center" spacing={spacing}>
                                {shopItem.map((arrayValue, index) => (
                                    <Grid key={index} item>
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardHeader
                                                avatar={
                                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                        <img src={arrayValue.author.image} alt="" />
                                                    </Avatar>
                                                }
                                                action={
                                                    <IconButton aria-label="settings">
                                                        <MoreVertIcon />
                                                    </IconButton>
                                                }
                                                title={arrayValue.title}
                                                subheader={arrayValue.updatedAt}
                                            />
                                            <CardMedia
                                                component="img"
                                                height="194"
                                                image={arrayValue.author.image}
                                                alt={arrayValue.author.username}
                                            />
                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                {arrayValue.slug}
                                                </Typography>
                                            </CardContent>
                                            <CardActions disableSpacing>
                                                <IconButton aria-label="add to favorites">
                                                    <FavoriteIcon />
                                                </IconButton>
                                                <ExpandMore
                                                    expand={expanded}
                                                    onClick={handleExpandClick}
                                                    aria-expanded={expanded}
                                                    aria-label="show more"
                                                >
                                                    <ExpandMoreIcon />
                                                </ExpandMore>
                                            </CardActions>
                                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                                <CardContent>
                                                    <Typography paragraph>Method:</Typography>
                                                    <Typography paragraph>
                                                        {arrayValue.body}
                                                    </Typography>
                                                    <Typography paragraph>
                                                        {arrayValue.description}
                                                    </Typography>
                                                </CardContent>
                                            </Collapse>
                                        </Card>
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
