import PropTypes from 'prop-types';
import styles from './Statistics.module.css'

const Statistics = ({ good,neutral,bad,total,positiveFeedback }) => {
  return (

    <ul>
      <li className={styles.statisticsItem}>Good:{good}</li>
      <li className={styles.statisticsItem}>Neutral:{neutral}</li>
      <li className={styles.statisticsItem}>Bad:{bad}</li>
      <li className={styles.statisticsItem}>Total:{total()}</li>
      <li className={styles.statisticsItem}>Positive feedback: {positiveFeedback()}%</li>
    </ul>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positiveFeedback: PropTypes.func.isRequired
};

export default Statistics;
