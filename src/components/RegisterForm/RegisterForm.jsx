import { Button, TextField, Container, Typography, Box } from '@mui/material';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { userPost } from 'store/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const nameId = nanoid();
  const emailId = nanoid();
  const passwordId = nanoid();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    const user = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(userPost(user));
    form.reset();
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Registration
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id={nameId}
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id={emailId}
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id={passwordId}
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterForm;
