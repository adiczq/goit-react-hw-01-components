import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function getRandomHexColor() {
  const maxDarkness = 128;
  const randomColor = `#${getRandomHexValue(maxDarkness)}${getRandomHexValue(
    maxDarkness
  )}${getRandomHexValue(maxDarkness)}`;
  return randomColor;
}

function getRandomHexValue(max) {
  const randomValue = Math.floor(Math.random() * (max + 1));
  const hexValue = randomValue.toString(16).padStart(2, '0');
  return hexValue;
}

export const Statistics = ({ title, stats }) => (
  <div className={css.statisticsContainer}>
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={title ? css.statListItem : css.statListItemNoTitle}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
