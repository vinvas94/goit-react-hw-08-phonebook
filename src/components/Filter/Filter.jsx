import React from 'react';
import { useDispatch } from 'react-redux';
import { addFilter } from 'store/contactsReducer';
import { TextField, Typography, Box } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = event => {
    const filter = event.target.value;
    dispatch(addFilter(filter));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Typography variant="h5" component="h3">
        Find contacts by name
      </Typography>
      <TextField
        label="Name"
        variant="outlined"
        onChange={changeFilter}
        inputProps={{
          pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
          title:
            "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
        }}
      />
    </Box>
  );
};

export default Filter;
