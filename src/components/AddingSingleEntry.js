import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import axios from "axios";
import Button from '@mui/material/Button';
import validateToken from './../requests/ValidateToken';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { fr } from "date-fns/locale";
import Stack from '@mui/material/Stack';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import Typography from '@mui/material/Typography';

export default function AddingSingleEntry(props) {
  const [status, setStatus] = React.useState(0);
  const [startingDate, setStartingDate] = React.useState(null);
  const [endingDate, setEndingDate] = React.useState(null);

  const { updatePage } = props;

  React.useEffect(() => {

      const checkToken = async () => { 
        await validateToken({status, setStatus});
      }

      checkToken()
      // make sure to catch any error
      .catch(console.error);

     }, []);

   async function addNewEntry(startingDate, endingDate) {

     console.log(startingDate);

     const start = startingDate.toISOString().slice(0, 19).replace('T', ' ');
     const end = endingDate.toISOString().slice(0, 19).replace('T', ' ');

     await axios.put("/api/wearings", {startingDate: start, endingDate: end, status: 0}, {withCredentials:true, CacheControl: "Public"})
     .then(function (response) {
       if (response.status===201) {
         console.log(response);
         updatePage();
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
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fr}>
        <Typography component="h3" variant="h5" sx={{fontWeight:"bold",mb:2}}>
          Ajout d'une nouvelle entrée
        </Typography>
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
      <Button
        type="button"
        variant="contained"
        color="secondary"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => addNewEntry(startingDate,endingDate)}
      >
        Ajouter une date de port
      </Button>
      </Stack>
    </LocalizationProvider>
  );
}
