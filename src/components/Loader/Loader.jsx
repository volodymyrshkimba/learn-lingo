import { BeatLoader } from "react-spinners";

import { useTheme } from "../../context/ThemeContext/ThemeContext";

import { THEME_COLORS_HEX } from "../../constants/ui";

import css from "./Loader.module.css";

const Loader = () => {
  const { theme } = useTheme();
  return (
    <div className={css.wrapper}>
      <BeatLoader color={THEME_COLORS_HEX[theme]} />
    </div>
  );
};

export default Loader;
