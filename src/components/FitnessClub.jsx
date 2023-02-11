import { Button, Grid, TextField, Box } from "@mui/material";
import React, { useState } from "react";



const FitnessClub = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [members, setMembers] = useState([]);
    const [showMembers, setShowMembers] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        setMembers([...members, { name, email, phoneNumber, address }]);
        alert("User added successfully");
    };

    const toggleShowMembers = () => {
        setShowMembers(!showMembers);
        alert("Work in progress");
    };

    return (
        <Box>
            <Grid width={"100%"} sx={{ backgroundColor: "white" }}>
                <Grid width={"70%"} marginLeft={8}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            sx={{ mt: 2 }}
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
                        <Button type="submit" variant="contained" sx={{ mt: 2, mb: 2, ml: 16 }} color="primary" >
                            Add Member
                        </Button>
                    </form>
                </Grid>



            </Grid>
            <Grid>
                <Button type="submit" variant="contained" sx={{ mt: 2, mb: 2, ml: 18, width: "250px" }} color="primary"
                    onClick={toggleShowMembers}
                >
                    View Member List
                </Button>
            </Grid>
        </Box>
    );
};

export default FitnessClub;
