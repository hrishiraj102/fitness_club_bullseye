import { Button, Grid, TextField, Box, Snackbar, Alert, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import React, { useState } from "react";



const FitnessClub = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [members, setMembers] = useState([]);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showMembers, setShowMembers] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        setMembers([...members, { name, email, phoneNumber, address }]);
        alert("User added successfully");
        setShowSuccess(true);
        setName("");
        setEmail("");
        setPhoneNumber("");
        setAddress("");
    };

    const handleClose = () => {
        setShowSuccess(false);
    };


    const toggleShow = () => {
        setShowMembers(!showMembers);

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
            <Grid >
                <Button type="submit" variant="contained" sx={{ mt: 2, mb: 2, ml: 18, width: "250px" }} color="primary"
                    onClick={toggleShow}
                >
                    View Member List
                </Button>
                <Grid sx={{ backgroundColor: "white" }}>


                    {showMembers && (
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Phone Number</TableCell>
                                    <TableCell>Address</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {members.map((member, index) => (<TableRow key={index}>
                                    <TableCell>{member.name}</TableCell>
                                    <TableCell>{member.email}</TableCell>
                                    <TableCell>{member.phoneNumber}</TableCell>
                                    <TableCell>{member.address}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                    <Snackbar open={showSuccess} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success">
                            User added successfully!
                        </Alert>
                    </Snackbar>
                </Grid>

            </Grid>
        </Box>
    );
};

export default FitnessClub;
