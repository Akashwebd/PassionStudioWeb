import { Paper,Box,Grid } from "@mui/material";
import React from "react";
import ReactPlayer from 'react-player';

const VIDEO_PATH = 'https://youtu.be/N8tnM9KyLos';

function VideoPlayer(){
return(
    <Paper sx={{padding:"40px 0px 40px 0"}}>
        <Box>
            <Grid container spacing={3} >
                <Grid item xs={12} sx={{justifyContent:'center',display:'grid'}}>
            <ReactPlayer url={VIDEO_PATH} controls={false} playing muted/>
            </Grid>
            </Grid>
        </Box>
    </Paper>
    // <h1>Hello</h1>
)

}

export default VideoPlayer;