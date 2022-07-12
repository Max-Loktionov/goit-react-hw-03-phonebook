import PropTypes from 'prop-types';
import { Delete, Item } from './Contacts.styled';

function ContactItem({ name, id, number, onDeleteContact }) {
  return (
    <Item key={id} id={id}>
      {name}: {number}{' '}
      <Delete type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Delete>
    </Item>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
