import { Link } from "react-router-dom";

import clsx from "clsx";

import { useTheme } from "../../context/ThemeContext/ThemeContext";

import css from "./Button.module.css";

function Button({
  as = "button",
  to = "/",
  children,
  size = 48,
  onClick,
  disabled,
}) {
  const { theme } = useTheme();

  const classes = clsx(
    size === 48 && css.btn48,
    size === 88 && css.btn88,
    css.btn,
    css[theme]
  );

  if (as === "link") {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
