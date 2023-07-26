import React,{useEffect,useState,useRef} from "react";
import { useInViewport } from 'react-in-viewport';
import CountUp from 'react-countup';
import { Box, Typography, Grid,Paper } from "@mui/material";
import { AchievementData } from './testimonialData';

function Achievement(){
    const myRef = useRef();
    const {inViewport} = useInViewport(myRef) ;
    const [counter,setcounter] = useState(null);

//     useEffect(()=>
// console.log('checkport',inViewport);
//     ),[inViewport]);
     useEffect(()=>{
       if(inViewport){
        setcounter(0);
       }
     },[inViewport]);
    return(
        <Paper ref={myRef} sx={{marginTop:'150px',backgroundColor:"black"}}>
        <Grid container spacing={16}>
            {AchievementData.map(item =>
            <Grid item sm={6} md={3} sx={{textAlign:'center',paddingTop:'20px!important',paddingBottom:'30px',paddingLeft:'20px'}}>
            <h1 style={{color:'white'}}><CountUp duration="3" start={counter} end={item.duration}/><span>+</span></h1>
            <Typography sx={{color:"white"}}>
                {item.description}
            </Typography>
            </Grid>
            )}
        {/* <Grid item xs={12} md={6} order={{sm:6,md:3}}>
            </Grid> */}
        </Grid>
    </Paper>
    );
}

export default Achievement;