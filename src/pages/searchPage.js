import React, { useState } from "react";
import { connect } from "react-redux";
import { searchUserAction } from "../redux/actions/userActions";
import SearchBox from "../containers/searchComponent/searchBox"
import CustomizedTables from "../containers/customizedTables/customizedTables"
import CalculateListComponent from "../containers/calculateListComponent/calculateListComponent"
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

const SearchPage = (props) => {
  let { isLoading, data } = props;

  const [keyword, setKeyWord] = useState("");

  const handleSearch = () => {
    if (keyword.length > 2 || !keyword) {
      props.searchLoading({
        q: keyword,
        per_page: 100
      });
    }
  };
  return (
    <div>
      <SearchBox placeholder="Search GitHub User" keywords={keyword} onChange={setKeyWord} onSearch={handleSearch} />
      {isLoading ?
        <CircularProgress /> : (keyword.length > 2 ? <CustomizedTables data={data?.items} /> : null)
      }
      {
        keyword.length > 2 &&
        <Typography marginTop={2} variant="h5" component="span">
          Retrieved {data?.items?.length || 0} results based on "{keyword}"
        </Typography>
      }
      <CalculateListComponent />
    </div>
  );

};


const mapStateToProps = ({ user: { isLoading, data, error } }) => {
  return {
    isLoading,
    data,
    error
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchLoading: (param) => dispatch(searchUserAction(param))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
