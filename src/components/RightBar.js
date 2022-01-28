import { Container, makeStyles, CssBaseline, Typography, ImageListItem, ImageList, Link } from '@material-ui/core'
import React from 'react'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar1 from '../images/jpg1.jpg'
import Avatar2 from '../images/jpg2.jpg'
import Avatar3 from '../images/jpg3.jpg'
import Avatar4 from '../images/jpg4.jpg'
import Avatar5 from '../images/jpg5.jpg'

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        position:'sticky',
        top:0
    },
    title:{
        fontSize: 16,
        fontWeight: 500,
        color:'#555',
        marginBottom:theme.spacing(2) 
    },
    AvatarGroup: {
        marginBottom:theme.spacing(2)
    },
    image:{
        borderRadius:'10px'
    },
    link: {
        marginRight: theme.spacing(2),
        color:'#555',
        fontSize:16,
        cursor:'pointer'
    }
}))
function RightBar() {
    const classes = useStyles()

    return (
        <>
            <CssBaseline />
            <Container className={classes.container}>
                <Typography className={classes.title}>Online Friends</Typography>
                <AvatarGroup max={4} className={classes.AvatarGroup} style={{flexDirection:'row'}}>
                    <Avatar alt="Remy Sharp" src={Avatar1} />
                    <Avatar alt="Travis Howard" src={Avatar2} />
                    <Avatar alt="Cindy Baker" src={Avatar3} />
                    <Avatar alt="Agnes Walker" src={Avatar4} />
                    <Avatar alt="Trevor Henderson" src={Avatar5} />
                </AvatarGroup>


                <Typography className={classes.title}>Gallery</Typography>
                <ImageList style={{marginBottom: 20}} sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                    <ImageListItem>
                        <img className={classes.image} src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format' alt=''/>
                    </ImageListItem>
                    <ImageListItem>
                        <img className={classes.image} src='https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format' alt=''/>
                    </ImageListItem>
                    <ImageListItem>
                        <img className={classes.image} src='https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format' alt=''/>
                    </ImageListItem>
                    <ImageListItem>
                        <img className={classes.image} src='https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format' alt=''/>
                    </ImageListItem>
                    <ImageListItem>
                        <img className={classes.image} src='https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format' alt=''/>
                    </ImageListItem>
                    <ImageListItem>
                        <img className={classes.image}  src='https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format' alt=''/>
                    </ImageListItem>
                </ImageList>
                <Typography>Categories</Typography>
                <Link className={classes.link} variant='body2'>Sport</Link>
                <Link className={classes.link} variant='body2'>Food</Link>
                <Link className={classes.link} variant='body2'>Movies</Link>
                <Link className={classes.link} variant='body2'>Science</Link>
            </Container>
           
        </>
    )
}

export default RightBar
