import * as React from 'react';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';

export default function SuccessAlert({message}) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <Snackbar open={open} onClose={handleClose} anchorOrigin={{ vertical:"top", horizontal:"center" }}>
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%', mb:2 }} action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }>
        {message}
      </Alert>
    </Snackbar>
    </div>
  );
}
