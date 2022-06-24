import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';


export default function LinearDeterminate(props) {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs = {4} style={{fontWeight:'bold'}}>Right Ans</Grid>
        <Grid item xs={0} style={{fontWeight:'bold'}}>Points {props.points}</Grid>
        <Grid item xs={4} style={{fontWeight:'bold', fontSize:'1rem'}}>Wrong Ans</Grid>
    </Grid>

    <Grid container spacing={1}>
        <Grid item xs = {6}><LinearProgress color='success' variant='determinate' value={props.cValue} style={{height:'3vh'}} /></Grid>
        <Grid item xs={6}><LinearProgress color='error' variant='determinate' value={props.iValue} style={{height:'3vh'}} /></Grid>
    </Grid>
    </div>
    
    
  );
}
