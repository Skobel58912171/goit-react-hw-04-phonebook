import PropTypes from 'prop-types';
import ItemContact from 'components/ItemContact/ItemContact';
import { Item } from './ListContacts.styled';
import { List } from './ListContacts.styled';

const ListContacts = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          <ItemContact
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={onDeleteContact}
          />
        </Item>
      ))}
    </List>
  );
};

ListContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ListContacts;
