import css from "./PageContainer.module.css";

const PageContainer = ({ children }) => {
  return <div className={css.homePageContainer}>{children}</div>;
};

export default PageContainer;
