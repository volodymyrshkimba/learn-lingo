import BookForm from "../BookForm/BookForm";

import css from "./BookModal.module.css";

const BookModal = ({ avatar_url, name, surname, closeModal }) => {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <p>Book trial lesson</p>
        <p>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>
        <div>
          <div>
            <img src={avatar_url} alt="avatar" />
          </div>
          <div>
            <p>Your teacher</p>
            <p>
              {name} {surname}
            </p>
          </div>
        </div>
        <BookForm />
      </div>
    </div>
  );
};

export default BookModal;
