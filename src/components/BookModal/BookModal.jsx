import BookForm from "../BookForm/BookForm";

import css from "./BookModal.module.css";

const BookModal = ({ avatar_url, name, surname, closeModal }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button
          className={css.closeBtn}
          onClick={() => closeModal()}
          type="button"
        >
          <svg width="32" height="32">
            <use href="../../../public/icons.svg#close"></use>
          </svg>
        </button>
        <p className={css.title}>Book trial lesson</p>
        <p className={css.descr}>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>
        <div className={css.teacherInfo}>
          <div className={css.imageWrapper}>
            <img src={avatar_url} alt="avatar" />
          </div>
          <div>
            <p className={css.teacherTag}>Your teacher</p>
            <p className={css.teacherName}>
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
