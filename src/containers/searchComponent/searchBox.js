import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from "prop-types";

function SearchBox(props) {
  const {
    onSearch,
    keywords,
    onChange,
    placeholder = ""
  } = props;
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: 500 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        name="search"
        value={keywords || ""}
        id="outlined-start-adornment"
        placeholder={placeholder}
        InputProps={{
          endAdornment: (<SearchIcon onClick={() => onSearch()} />)
        }}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter"){
            onSearch();
            e.preventDefault();
          } 
        }}
        variant="outlined"
      />
    </Box>
  );
}

SearchBox.propTypes = {
  onSearch: PropTypes.func,
  keywords: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

SearchBox.defaultProps = {
  onSearch: () => { },
  keywords: "",
  onChange: () => { },
  placeholder: "Search",
};

export default SearchBox;
