
import './App.css';
import { Box } from '@mui/system';

import FitnessClub from './components/FitnessClub';
import { Button, Grid, Typography } from '@mui/material';

function App() {
  return (
    <div   >
      <Grid sx={{display:"flex", justifyContent:"center",ml:"450px",mt:"15%",flexDirection:"column"}}>
      <Typography variant="h4" color="white" sx={{display:"flex",ml:10,mb:3}} >Fitness Club Registration</Typography>
      <Box sx={{display:"flex", justifyContent:"center", backgroundColor:"white",width:"550px"}}>
      
      <FitnessClub/>

      

      </Box>
      <Button type="submit" variant="contained" sx={{mt:2,mb:2,ml:20,width:"250px"}} color="primary">
        View Member List
      </Button>
      </Grid>
      

      
    </div>
  );
}

export default App;
