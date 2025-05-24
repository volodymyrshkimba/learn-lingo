import { Link } from "react-router-dom";
import css from "./Button.module.css";

function Button({ as = "button", to = "/", children, size = 48 }) {
  const sizeClass = {
    48: css.btn48,
    88: css.btn88,
  }[size];

  const classes = `${css.btn} ${sizeClass}`.trim();

  if (as === "link") {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}

export default Button;
