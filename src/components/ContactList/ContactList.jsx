import s from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={s.container}>
      {contacts.map(({ name, number, id }) => (
        <div className={s.contact} key={id}>
          <Contact name={name} number={number} id={id} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
};

export default ContactList;
