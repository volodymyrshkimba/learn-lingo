import { useState } from "react";

import css from "./CustomSelect.module.css";

import clsx from "clsx";

const CustomSelect = ({ options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(false);

  return (
    <button
      className={css.select}
      type="button"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <span className={css.placeholder}>{value || placeholder}</span>
      <div className={css.openArrow}>
        {isOpen ? (
          <svg width="20" height="20">
            <use href="../../../public/icons.svg#arrow-down"></use>
          </svg>
        ) : (
          <svg width="20" height="20">
            <use href="../../../public/icons.svg#arrow-up"></use>
          </svg>
        )}
      </div>
      <div className={clsx(css.listWrapper, isOpen && css.visible)}>
        <ul className={clsx(css.optionsList)}>
          <li
            className={css.option}
            onClick={() => {
              setIsOpen(false);
              setValue("");
            }}
          >
            ----
          </li>
          {options !== null &&
            options.map((item) => {
              return (
                <li
                  className={css.option}
                  key={item}
                  onClick={() => {
                    setIsOpen(false);
                    setValue(item);
                  }}
                >
                  {item}
                </li>
              );
            })}
        </ul>
      </div>
    </button>
  );
};

export default CustomSelect;
