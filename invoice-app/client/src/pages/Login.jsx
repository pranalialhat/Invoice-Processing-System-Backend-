import { useState } from "react";
import { Box, Button, TextField, Typography, styled } from "@mui/material";

const Container = styled(Box)({
  width: 400,
  margin: "100px auto",
  padding: 30,
  boxShadow: "0 0 10px rgba(0,0,0,0.1)"
});

const Login = ({ onLogin }) => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const stored = JSON.parse(localStorage.getItem("users")) || [];
    const exists = stored.find(u => u.email === user.email && u.password === user.password);
    if (exists) {
      onLogin(user.email);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Container>
      <Typography variant="h5">Login</Typography>
      <TextField label="Email" name="email" fullWidth margin="normal" onChange={handleChange} />
      <TextField label="Password" name="password" type="password" fullWidth margin="normal" onChange={handleChange} />
      <Button variant="contained" fullWidth onClick={handleSubmit}>Login</Button>
    </Container>
  );
};

export default Login;
