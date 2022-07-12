import ContactItem from './ContactItem';

function Contacts({ data, onDeleteContact }) {
  return (
    <ul>
      {data.map(contact => {
        return (
          <ContactItem
            name={contact.name}
            number={contact.number}
            id={contact.id}
            key={contact.id}
            onDeleteContact={onDeleteContact}
          ></ContactItem>
        );
      })}
    </ul>
  );
}

export default Contacts;
