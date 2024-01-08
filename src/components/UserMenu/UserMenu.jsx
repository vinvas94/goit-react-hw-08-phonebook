import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'store/operations';
import { useAuth } from 'hooks';
import { Button, Typography, Box } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        marginTop: 2,
        marginBottom: 2,
      }}
    >
      <Typography variant="subtitle1">Welcome, {user.name}</Typography>
      <Button
        variant="outlined"
        size="small"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
