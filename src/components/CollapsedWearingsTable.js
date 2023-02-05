import * as React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import validateToken from './../requests/ValidateToken';
import axios from "axios";
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

function Row(props) {
  const { row } = props;

  const dateWorn = new Date(row.selected_date);
  const timeWorn = new Date(row.diff);

  const diffHours = Math.floor(timeWorn/60);
  const diffMinutes = Math.floor(timeWorn % 60);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell align="left">{capitalize(dateWorn.toLocaleDateString("fr-FR",options))}</TableCell>
        <TableCell align="left">
          <Typography color={timeWorn > 0 ? "black" : "red"} sx={{"text-align":"left"}}>
          {timeWorn > 0 ? diffHours + " heures et " + diffMinutes + " minutes" : "Non porté à cette date."}
          </Typography>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    dateWorn: PropTypes.string.isRequired,
    timeWorn: PropTypes.string.isRequired,
  }).isRequired,
};

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};


export default function CollapsedWearingsTable() {

  const [wearings, setWearings] = React.useState([]);
  const [status, setStatus] = React.useState(0);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [loading, setLoading] = React.useState(false);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - wearings.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  React.useEffect(() => {

      const checkToken = async () => { 
        await validateToken({status, setStatus});
      }

      checkToken()
      // make sure to catch any error
      .catch(console.error);

      const fetchResults = async () => {

        const offset = - new Date().getTimezoneOffset()/60;

        await axios.get("/api/wearings?collapsedResults=true&offset="+offset,{withCredentials:true})
        .then(function (response) {
          if (response.status===200) {
            setWearings(response.data);
            setLoading(true);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      fetchResults()
      // make sure to catch any error
      .catch(console.error);
      // eslint-disable-next-line
     }, []);

  return (
      loading ?
    (<TableContainer component={Paper} sx={{mt:2}}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell align="left" colSpan={5} sx={{fontWeight:"bold",fontSize:14}}>
              Historique par jour
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">Jour porté</TableCell>
            <TableCell align="left">Durée de port</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? wearings.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : wearings
          ).map((row) => (
            <Row key={row.name} row={row} />
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={wearings.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>)
  :
(<Skeleton variant="rectangular" animation="wave" width="100%" sx={{height: { xs: 476, md: 452 }}}/>)
  );
}
