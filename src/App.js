
import './App.css';
import { Box } from '@mui/system';

import FitnessClub from './components/FitnessClub';
import { Button, Grid, Typography } from '@mui/material';

function App() {
  return (
    <div   >
      <Grid sx={{display:"flex", justifyContent:"center",ml:"450px",mt:"15%",flexDirection:"column"}}>
      <Typography variant="h4" color="white" sx={{display:"flex",ml:10,mb:3}} >Fitness Club Registration</Typography>
      <Box sx={{display:"flex", justifyContent:"center",width:"550px"}}>
      
      <FitnessClub/>

      

      </Box>
      </Grid>
      

      
    </div>
  );
}

export default App;
