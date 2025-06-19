import { useForm } from "react-hook-form";

import css from "./BookForm.module.css";

const BookForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
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
