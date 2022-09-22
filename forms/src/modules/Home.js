import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Forms } from '../components/Form';

export default function Home() {
  const [open, setOpen] = React.useState(false);  
  const [dataToEdit, setDataToEdit] = React.useState({
    package_name: '',
    primary_product: '',
    min_quantity: '',
    max_quantity: ''
  });  


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (data) => {
    setDataToEdit(data)
    console.log(data)
  }
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Forms 
            isEditEnabled={false}
            editData={dataToEdit}
            submit={handleSubmit}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>

      <pre>{JSON.stringify(dataToEdit, null, 3)}</pre>
    </div>
  );
}
