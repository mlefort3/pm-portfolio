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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { fr } from "date-fns/locale";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Stack from '@mui/material/Stack';




function Row(props) {
  const { row } = props;

  const start = new Date(row.startingDate);
  const end = new Date(row.endingDate);

  const [startingDate, setStartingDate] = React.useState(null);
  const [endingDate, setEndingDate] = React.useState(null);

  React.useEffect(() => {
      setStartingDate(start);
      setEndingDate(end);
      // eslint-disable-next-line
     }, []);


  const diffTime = (Math.abs(end - start))/(1000*60); // in minutes
  const diffHours = Math.floor(diffTime/60);
  const diffMinutes = Math.floor(diffTime % 60);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openModify, setOpenModify] = React.useState(false);

  const handleClickOpenDelete = () => {
      setOpenDelete(true);
    };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleClickOpenModify = () => {
      setOpenModify(true);
    };

  const handleCloseModify = () => {
    setOpenModify(false);
  };

  async function handleDelete (wearingID) {
    await axios.delete("/api/wearings/"+wearingID, {withCredentials:true})
    .then(function (response) {
      if (response.status===204) {
        window.location.reload(false);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  async function addNewEntry(startingDate, endingDate, wearingID) {

    const start = startingDate.toISOString().slice(0, 19).replace('T', ' ');
    const end = endingDate.toISOString().slice(0, 19).replace('T', ' ');

    await axios.put("/api/wearings/"+wearingID, {startingDate: start, endingDate: end}, {withCredentials:true, CacheControl: "Public"})
    .then(function (response) {
      if (response.status===200) {
        console.log(response);
        handleCloseModify();
        window.location.reload(false);
      }
      else {
        console.log(response);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell align="left">{start.toLocaleDateString("fr-FR")}</TableCell>
        <TableCell align="left">{start.toLocaleTimeString("fr-FR")}</TableCell>
        <TableCell align="left">{end.toLocaleDateString("fr-FR")}</TableCell>
        <TableCell align="left">{end.toLocaleTimeString("fr-FR")}</TableCell>
        <TableCell align="left">{diffHours + " heures et " + diffMinutes + " minutes"}</TableCell>
        <TableCell align="center">
        <IconButton
          aria-label="delete entry"
          size="small"
          onClick={handleClickOpenModify}
        >
          <EditIcon />
        </IconButton>
          <IconButton
            aria-label="delete entry"
            size="small"
            onClick={handleClickOpenDelete}
          >
            <DeleteIcon />
          </IconButton>
          <Dialog
              open={openDelete}
              onClose={handleCloseDelete}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Voulez-vous vraiment supprimer cette entrée ?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Cette entrée sera supprimée. Cette action est irréversible.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDelete}>Annuler</Button>
                <Button onClick={() => handleDelete(`${row.wearingID}`)} autoFocus>
                  Confirmer
                </Button>
              </DialogActions>
            </Dialog>
            <Dialog
                open={openModify}
                onClose={handleCloseModify}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Modifier cette entrée"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description" sx={{mb:2}} >
                    Vous pouvez modifier cette entrée puis cliquer sur "Valider" pour sauvegarder ces changements.
                  </DialogContentText>
                  <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fr}>
                  <Stack spacing={3}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="Début de port"
                    value={startingDate}
                    onChange={(newValue) => {
                      setStartingDate(newValue);
                    }}
                  />
                  <DateTimePicker
                      renderInput={(props) => <TextField {...props} />}
                      label="Fin de port"
                      value={endingDate}
                      sx={{mt:2}}
                      onChange={(newValue) => {
                        setEndingDate(newValue);
                      }}
                    />
                    </Stack>
                    </LocalizationProvider>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseModify}>Annuler</Button>
                  <Button onClick={() => addNewEntry(startingDate,endingDate,`${row.wearingID}`)} autoFocus>
                    Valider
                  </Button>
                </DialogActions>
              </Dialog>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    startingDate: PropTypes.string.isRequired,
    endingDate: PropTypes.string.isRequired,
  }).isRequired,
};


export default function WearingsTable() {

  const [wearings, setWearings] = React.useState([]);
  const [status, setStatus] = React.useState(0);

  React.useEffect(() => {

      const checkToken = async () => { 
        await validateToken({status, setStatus});
      }

      checkToken()
      // make sure to catch any error
      .catch(console.error);

      const fetchResults = async () => {

        await axios.get("/api/wearings",{withCredentials:true})
        .then(function (response) {
          if (response.status===200) {
            setWearings(response.data);
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
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontSize:16,fontWeight:"bold"}}>Accéder à l'historique complet</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <TableContainer component={Paper} sx={{mt:2}}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="left" colSpan={6} sx={{fontWeight:"bold"}}>
                  Historique complet
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{fontSize:14,fontWeight:"bold"}} align="left">Date de début de port</TableCell>
                <TableCell sx={{fontSize:14,fontWeight:"bold"}} align="left">Heure de début de port</TableCell>
                <TableCell sx={{fontSize:14,fontWeight:"bold"}} align="left">Date de fin de port</TableCell>
                <TableCell sx={{fontSize:14,fontWeight:"bold"}} align="left">Heure de fin de port</TableCell>
                <TableCell sx={{fontSize:14,fontWeight:"bold"}} align="left">Durée de port</TableCell>
                <TableCell sx={{fontSize:14,fontWeight:"bold"}} align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {wearings.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </AccordionDetails>
      </Accordion>
  );
}
