import StatisticsItem from './StatisticsItem/StatisticsItem';
import s from './Statistics.module.scss';
import PropTypes from 'prop-types';

const Statistics = ({ title }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.statList}>
        <StatisticsItem />
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};

export default Statistics;
