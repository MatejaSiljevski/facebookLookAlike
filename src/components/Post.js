import React from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles, Typography } from '@material-ui/core'
import Kiddo from '../images/kiddo.jpg'

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10)
    },
    media:{
        height: '250px',
        [theme.breakpoints.down('sm')]:{
            height:150
        }
    },
    card: {
        marginBottom: theme.spacing(3)
    }
}))

function  Post() {
    const classes = useStyles()

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia image={Kiddo} className={classes.media} title="My post" />
                <CardContent>
                    <Typography variant='h5' gutterBottom>My first post</Typography>
                    <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi incidunt ad unde quod tempore laudantium nesciunt ipsam ratione maiores. Repudiandae!</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size='small' color="primary">Share</Button>
                <Button size='small' color="primary">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default Post
