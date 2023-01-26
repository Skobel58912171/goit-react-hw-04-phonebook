import PropTypes from 'prop-types';

import { DataContact } from './ItemContact.styled';
import { BtnDelete } from './ItemContact.styled';

const ItemContact = ({ id, name, number, onDelete }) => {
  return (
    <>
      <DataContact>
        <span>{name}</span>: <span>{number}</span>
      </DataContact>
      <BtnDelete type="button" onClick={() => onDelete(id)}>
        Delete
      </BtnDelete>
    </>
  );
};

ItemContact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default ItemContact;
