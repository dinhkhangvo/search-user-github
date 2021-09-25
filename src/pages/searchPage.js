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
  const [canSeach, setAllowSearch] = useState(true);
  const [visibleTable, setVisibleTable] = useState(false);

  const handleChange = (e) => {
    if (!e) {
      setVisibleTable(false);
    }
    if (e !== keyword) {
      setKeyWord(e);
      setAllowSearch(true);
    } else {
      setAllowSearch(false);
    }
  };

  const handleSearch = () => {
    if (keyword.length > 2 && canSeach) {
      setAllowSearch(false);
      setVisibleTable(true);
      props.searchLoading({
        q: keyword,
        per_page: 100
      });
    }
  };
  return (
    <div>
      <SearchBox placeholder="Search GitHub User" keywords={keyword} onChange={handleChange} onSearch={handleSearch} />
      {isLoading ? <CircularProgress /> :
        (visibleTable &&
          <>
            {!canSeach &&
              <Typography marginTop={2} variant="h5" component="span">
                Retrieved {data?.items?.length || 0} results based on "{keyword}"
              </Typography>
            }
            <CustomizedTables data={data?.items} />
          </>)}
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
