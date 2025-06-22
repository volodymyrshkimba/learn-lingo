import css from "./ReviewerItem.module.css";

const ReviewerItem = ({ comment, reviewer_name, reviewer_rating, avatar }) => {
  return (
    <li className={css.reviewsItem}>
      <div className={css.reviewerInfo}>
        <div>
          {avatar ? (
            <img
              className={css.avatar}
              src={avatar}
              alt="avatar"
              width={44}
              height={44}
            />
          ) : (
            <span className={css.noAvatar}>
              <svg width="16" height="16">
                <use href="/icons.svg#user"></use>
              </svg>
            </span>
          )}
        </div>
        <div>
          <p className={css.reviewerName}>{reviewer_name}</p>
          <div className={css.reviewerRating}>
            <svg width="16" height="16">
              <use href="/icons.svg#star"></use>
            </svg>
            {reviewer_rating.toString().padEnd(3, ".0")}
          </div>
        </div>
      </div>
      <p>{comment}</p>
    </li>
  );
};

export default ReviewerItem;
