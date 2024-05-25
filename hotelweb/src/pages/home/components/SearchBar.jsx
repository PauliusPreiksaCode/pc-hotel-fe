import { Box, TextField } from "@mui/material";
import { useState } from "react";
import styles from "../Home.module.css";

const SearchBar = ({hotels, setFilteredHotels}) => {
    const [search, setSearch] = useState("");

    const handleSearchChange = (e) => {
        const searchValue = e.target.value;
        setSearch(searchValue);

        if(!!!searchValue) {
            setFilteredHotels(hotels);
        } else {
            const filtered = hotels.filter((hotel) => 
                hotel.location.toLowerCase().includes(searchValue.toLowerCase()));

            setFilteredHotels(filtered);
        }
    };

    return (
        <Box className={styles.searchBox}>
            <TextField
                variant="outlined"
                value={search}
                fullWidth
                onChange={handleSearchChange}
                placeholder="Search by location"
                className={styles.searchInput}
            />
        </Box>
    );
}

export default SearchBar;
