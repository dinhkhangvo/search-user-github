import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from "prop-types";
import Avatar from '@mui/material/Avatar';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables(props) {
  const { data } = props;
  return (
    <TableContainer sx={{ maxHeight: 500 }} component={Paper}>
      <Table stickyHeader sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">No.</StyledTableCell>
            <StyledTableCell >Avatar</StyledTableCell>
            <StyledTableCell >UserName</StyledTableCell>
            <StyledTableCell >Type</StyledTableCell>
            <StyledTableCell >Score</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="left">{index+1}</StyledTableCell>
              <StyledTableCell >
                <Avatar alt={row.login} src={row.avatar_url} />
              </StyledTableCell>
              <StyledTableCell >{row.login}</StyledTableCell>
              <StyledTableCell >{row.type}</StyledTableCell>
              <StyledTableCell >{row.score}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

CustomizedTables.propTypes = {
  data: PropTypes.array,
};

CustomizedTables.defaultProps = {
  data: []
};