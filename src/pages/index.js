import * as React from 'react';
import { Grid } from '@mui/material';
import Navbar from './components/Navbar'
import Home from './container/Home'

function Index(props) {

  return (
    <Grid className='example-scroll' sx={{ display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Home />
    </Grid>
  );
}
export default Index;
