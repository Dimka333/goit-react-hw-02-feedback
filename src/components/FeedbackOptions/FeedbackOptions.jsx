import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, handleFeedback }) => {
  return (

    <div className={styles.btnCotainer}>
      {options.map((el) => (
        <button
          className={styles[el]}
          key={el}
          id={el}
          type='button'
          onClick={() => handleFeedback(el)}>{el.charAt(0).toUpperCase() + el.slice(1)}
        </button>
      ))}
    </div>
  )
}

FeedbackOptions.propTypes = {
  handleFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;
