import s from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

const Contact = ({ name, number, id, onDelete }) => {
  const handleDelete = () => onDelete(id);

  return (
    <>
      <ul className={s.contacts}>
        <li>
          <FaUser className={s.icon} />
          <p>{name}</p>
        </li>
        <li>
          <FaPhoneAlt className={s.icon} />
          <p>{number}</p>
        </li>
      </ul>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default Contact;
