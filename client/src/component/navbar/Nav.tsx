import React from 'react'
import { Link } from "react-router-dom";
import {Button, Grid} from '@material-ui/core';


const Nav = () => {
    return (
        <div className="nav-rtl">
        <br />
          <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={3}
              >

              <Grid container item xs={3} >
                  <Link to="/home">
                          <Button   color="primary" variant="contained"> Home </Button>
                  </Link>
              </Grid>
              <Grid container item xs={3} >
                  <Link to="/table">
                          <Button   color="primary" variant="contained"> Products </Button>
                  </Link>
              </Grid>
              <Grid container item xs={3} >
                  <Link to="/input">
                          <Button   color="primary" variant="contained"> Add product </Button>
                  </Link>
              </Grid>
      </Grid>
      <br /> <br />
  </div>
    )
}

export default Nav
