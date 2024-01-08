import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import { ListContacts } from '../../components/ListContacts/ListContacts';
import { Contacts } from '@mui/icons-material';

const ContactsPage = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
      <ListContacts />
    </div>
  );
};

export default ContactsPage;
