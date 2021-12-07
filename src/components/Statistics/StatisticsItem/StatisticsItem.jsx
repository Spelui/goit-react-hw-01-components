import PropTypes from 'prop-types';
import { data } from '../../../data/data.json';
import s from './StatisticsItem.module.scss';

const StatisticsItem = () => {
  return data.map(({ label, percentage, id }) => {
    return (
      <li className={s.item} key={id}>
        <span className={s.label}>{label}</span>
        <span className={s.percentage}>{percentage}%</span>
      </li>
    );
  });
};

StatisticsItem.prototype = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default StatisticsItem;
