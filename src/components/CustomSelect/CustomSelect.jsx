import { useState } from "react";

import clsx from "clsx";

import css from "./CustomSelect.module.css";

const CustomSelect = ({ options, placeholder, filter, setFilter, type }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx(css.selectWrapper, css[type])}>
      <div className={css.placeholder}>{placeholder}</div>
      <button
        className={css.select}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={css.currentValue}>
          {filter[type] || "----"}
          {filter[type] && type === "price" && " $"}
        </span>
        <span className={css.openArrow}>
          <svg width="12" height="8">
            <use href={`/icons.svg#arrow-${isOpen ? "down" : "up"}`}></use>
          </svg>
        </span>
      </button>

      {isOpen && (
        <ul className={css.optionsList}>
          <li
            className={css.option}
            role="option"
            onClick={() => {
              setIsOpen(false);
              setFilter({ ...filter, [type]: "" });
            }}
          >
            ----
          </li>
          {options?.map((item) => (
            <li
              className={css.option}
              role="option"
              key={item}
              onClick={() => {
                setIsOpen(false);
                setFilter({ ...filter, [type]: item });
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
