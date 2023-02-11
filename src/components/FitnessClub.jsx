import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";


const FitnessClub = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    
  };

  return (
    <Grid width={"80%" }>
    <form onSubmit={handleSubmit}>
      <TextField 
        sx={{mt:2}}
        label="Name"
        value={name}
        onChange={event => setName(event.target.value)}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Email"
        value={email}
        onChange={event => setEmail(event.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone Number"
        value={phoneNumber}
        onChange={event => setPhoneNumber(event.target.value)}
        required
        margin="normal"
        fullWidth
      />
      <TextField
        label="Address"
        value={address}
        onChange={event => setAddress(event.target.value)}
        fullWidth
        
        margin="normal"
      />
      <Button type="submit" variant="contained" sx={{mt:2,mb:2,ml:20}} color="primary">
        Add Member
      </Button>
    </form>
    </Grid>
  );
};

export default FitnessClub;
