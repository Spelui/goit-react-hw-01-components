import StatisticsItem from './StatisticsItem/StatisticsItem';
import s from './Statistics.module.scss';

const Statistics = () => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>

      <ul className={s.statList}>
        <StatisticsItem />
      </ul>
    </section>
  );
};

export default Statistics;
