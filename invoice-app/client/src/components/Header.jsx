
import { AppBar, Toolbar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const logo = "https://dashboard.getinvoice.co/dboard/img/logo.png";
    const navigate = useNavigate();

    const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

    return (
        <AppBar position="static" color="secondary">
            <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
                <img src={logo} alt="logo" style={{ width: 120 }} />
                <Button color="inherit" onClick={handleLogout}>Logout</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;