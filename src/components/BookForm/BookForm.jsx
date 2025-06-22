import { useForm } from "react-hook-form";
import clsx from "clsx";

import css from "./BookForm.module.css";

const values = [
  "Career and business",
  "Lesson for kids",
  "Living abroad",
  "Exams and coursework",
  "Culture, travel or hobby",
];

const BookForm = () => {
  const { register, handleSubmit, watch, reset } = useForm();

  const onSubmit = async (data) => {
    reset();
    console.log(data);
  };

  const isAgreed = watch("reason");

  return (
    <div>
      <div className={css.title}>
        What is your main reason for learning English?
      </div>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <ul className={css.radioList}>
          {values.map((value, index) => (
            <li key={value} className={css.radioItem}>
              <label className={css.radioWrapper}>
                <input
                  type="radio"
                  value={index + 1}
                  {...register("reason", { required: true })}
                  className={css.hiddenRadio}
                />
                <span
                  className={clsx(
                    css.customRadio,
                    Number(isAgreed) === index + 1 && css.active
                  )}
                ></span>
                <span className={css.radioLabelText}>{value}</span>
              </label>
            </li>
          ))}
        </ul>

        <input
          className={css.input}
          {...register("name")}
          placeholder="Full Name"
        />

        <input
          className={css.input}
          type="Email"
          {...register("email")}
          placeholder="Email"
        />

        <input
          className={css.input}
          type={"text"}
          {...register("phone")}
          placeholder="Phone number"
        />

        <button className={css.btn} type="submit">
          Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;
