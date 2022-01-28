import React, {useState} from 'react'
import {makeStyles, AppBar, Typography, Toolbar, InputBase, alpha, Badge, Avatar} from '@material-ui/core'
import {Search, Mail, Notifications, Cancel} from '@material-ui/icons'
import Mateja from '../images/fotografija-cv.jpg'

const useStyles = makeStyles((theme) => ({
  logoLg: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
          display: 'block'
      }
  },
  logoSm: {
      display: 'block',
      [theme.breakpoints.up('sm')]: {
          display:'none'
      }
  },
  toolbar: {
      display:'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
          height: '70px'
      }
  },
  search: {
      display:'flex',
      alignItems: 'center',
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25)
      },
      width:'50%',
      borderRadius: theme.shape.borderRadius,
      [theme.breakpoints.down('1000')]: {
          display:(props) => (props.open ? 'flex' : 'none'),
      }
  },
  input: {
      color: 'white',
      marginLeft: theme.spacing(1),
      width: '100%'
  },
  cancel: {
    [theme.breakpoints.up("1000")]: {
        display: 'none'
    }
  },
  searchIcon: {
      marginLeft: theme.spacing(1),
  },
  icons: {
      alignItems: 'center',
      display:(props) => props.open ? 'none' : 'flex',
      cursor: 'pointer',
  },
  searchButton: {
      marginRight: theme.spacing(2),
      cursor: 'pointer',
      [theme.breakpoints.up('1000')]: {
          display: 'none'
      }
  }
}
))


function Navbar() {
    const [open, setOpen] = useState(false)
    const classes = useStyles({open})
    
    return (
        <AppBar position='fixed'>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.logoLg}>
            Lama Dev
          </Typography>
          <Typography variant="h6" className={classes.logoSm}>
            LAMA 
          </Typography>
          <div className={classes.search}>
              <Search className={classes.searchIcon}/>
              <InputBase placeholder="Search..." className={classes.input}/>
              <Cancel className={classes.cancel} onClick={() => setOpen(false)}/>
          </div>
          <div className={classes.icons}>
              <Search className={classes.searchButton} onClick={() => setOpen(true)}/>
               <Badge badgeContent={4} color="secondary" style={{marginRight: '2rem'}}>
                    <Mail />
                </Badge>  
               <Badge badgeContent={4} color="secondary" style={{marginRight: '2rem'}}>
                    <Notifications />
               </Badge> 
                <Avatar alt="Mateja Siljevski" src={Mateja}></Avatar>
          </div>
        </Toolbar>
      </AppBar>
    )
}

export default Navbar
