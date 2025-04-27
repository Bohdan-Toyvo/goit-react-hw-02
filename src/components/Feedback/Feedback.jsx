import css from './Feedback.module.css';

export default function Feedback({ value, totalFeedback, positiveFeedback }) {
  return (
    <div className={css.feedback}>
      <p className={css.item}>Good: {value.good}</p>
      <p className={css.item}>Neutral: {value.neutral}</p>
      <p className={css.item}>Bad: {value.bad}</p>
      <p className={css.item}>Total: {totalFeedback}</p>
      <p className={css.item}>Positive: {positiveFeedback}%</p>
    </div>
  );
}
