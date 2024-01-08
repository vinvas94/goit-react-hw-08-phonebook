import React from 'react';
import { useAuth } from 'hooks';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Box } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Link component={RouterLink} to="/" underline="none" color="inherit">
        Home
      </Link>
      {isLoggedIn && (
        <Link
          component={RouterLink}
          to="/contacts"
          underline="none"
          color="inherit"
        >
          Contacts
        </Link>
      )}
    </Box>
  );
};

export default Navigation;
