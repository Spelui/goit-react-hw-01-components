import PropTypes from 'prop-types';
import s from './StatsItem.module.scss';

const Label = ({ title, quantity }) => {
  return (
    <li className={s.item}>
      <span className={s.label}>{title}</span>
      <span className={s.quantity}>{quantity}</span>
    </li>
  );
};

Label.prototype = {
  title: PropTypes.string,
  quantity: PropTypes.number,
};

export default Label;
