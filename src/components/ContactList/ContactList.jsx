import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../store/operations';
import { selectContacts } from '../../store/selectors';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectContacts);

  return (
    <List>
      {filteredContacts.map(contact => (
        <ListItem
          key={contact.id}
          style={{ margin: '10px 0' }}
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText primary={`${contact.name}: ${contact.number}`} />
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
