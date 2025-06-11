import { useState } from "react";
import { Box, Button, TextField, Typography, styled } from "@mui/material";

const Container = styled(Box)({
  width: 400,
  margin: "100px auto",
  padding: 30,
  boxShadow: "0 0 10px rgba(0,0,0,0.1)"
});

const Register = ({ onRegister }) => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.find(u => u.email === user.email);
    if (userExists) {
      alert("User already exists");
    } else {
      existingUsers.push(user);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      alert("Registration successful");
      onRegister();
    }
  };

  return (
    <Container>
      <Typography variant="h5">Register</Typography>
      <TextField label="Email" name="email" fullWidth margin="normal" onChange={handleChange} />
      <TextField label="Password" name="password" type="password" fullWidth margin="normal" onChange={handleChange} />
      <Button variant="contained" fullWidth onClick={handleSubmit}>Register</Button>
    </Container>
  );
};

export default Register;
