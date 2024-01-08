import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectGetContacts } from '../../store/selectors';
import { addContact } from '../../store/operations';
import { TextField, Button, Box } from '@mui/material';

export const ContactForm = ({ title }) => {
  const contacts = useSelector(selectGetContacts);
  const dispatch = useDispatch();
  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const formatPhone = number => {
      return number.replace(/(\d{3})(\d{2})(\d{2})/, `$1-$2-$3`);
    };

    const contactName = form.elements.name.value.toLowerCase();
    const contactPhone = formatPhone(form.elements.number.value);
    const contact = {
      id: nanoid(),
      name: form.elements.name.value,
      number: contactPhone,
      createAt: nanoid(),
    };

    const isContactExists = contacts.some(
      existingContact =>
        existingContact.name.toLowerCase() === contactName &&
        existingContact.number === contactPhone
    );

    if (isContactExists) {
      alert(
        `${form.elements.name.value} is already in contacts with the same phone number.`
      );
    } else {
      dispatch(addContact(contact));
    }

    form.reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <h2>{title}</h2>
      <TextField
        margin="normal"
        required
        fullWidth
        id={nameId}
        label="Name"
        name="name"
        type="text"
        autoComplete="name"
        autoFocus
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="number"
        label="Number"
        type="tel"
        id={numberId}
        autoComplete="tel"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Add Contact
      </Button>
    </Box>
  );
};

export default ContactForm;
