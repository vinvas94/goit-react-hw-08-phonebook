import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Box } from '@mui/material';

export const AuthNav = () => {
  return (
    <Box
      sx={{
        '& > *': {
          margin: 1,
        },
      }}
    >
      <Button component={NavLink} to="/register" color="inherit">
        Registration
      </Button>
      <Button component={NavLink} to="/login" color="inherit">
        Log In
      </Button>
    </Box>
  );
};
