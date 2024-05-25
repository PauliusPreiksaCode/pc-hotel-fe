import { Box, Button } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Navbar.module.css";

const Header = () => {
    return (
        <>
            <header>
                <Box className={styles.HeaderContainer}>
                    <NavLink to="/">
                        <Button variant="contained" color="success" size="large">Home</Button>
                    </NavLink>
                    <NavLink to="/orders">
                        <Button variant="contained" color="success" size="large">My bookings</Button>
                    </NavLink>
                </Box>
            </header>
            <Outlet />
        </>
    );
}

export default Header;