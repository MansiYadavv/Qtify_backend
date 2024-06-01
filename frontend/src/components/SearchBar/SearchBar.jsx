import React from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import searchIcon from "../../assets/Searchicon.svg"; // Import as a URL
import styles from "./SearchBar.module.css";

const Search = ({ search }) => {
  return (
    <form className={styles.wrapper} onSubmit={(e) => e.preventDefault()}>
      <TextField
        className={styles.search}
        placeholder={search}
        variant="outlined"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit">
                <img src={searchIcon} alt="search" className={styles.icon} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default Search;
