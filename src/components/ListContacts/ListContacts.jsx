import ContactList from 'components/ContactList/ContactList';
import { selectGetIsLoading } from 'store/selectors';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'components/Loader/Loader';
import { useEffect } from 'react';
import { fetchContacts } from '../../store/operations';

export const ListContacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const loading = useSelector(selectGetIsLoading);

  return <div>{loading ? <Loader /> : <ContactList />}</div>;
};
