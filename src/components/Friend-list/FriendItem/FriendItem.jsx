import { friends } from '../../../data/friends.json';
import PropTypes from 'prop-types';
import './FriendItem.scss';

const FriendItem = () => {
  return friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <li className="item" key={id}>
        {isOnline ? (
          <span className="online"></span>
        ) : (
          <span className="ofline"></span>
        )}
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </li>
    );
  });
};

FriendItem.propTypes = {
  avatar: PropTypes.string,
  friendName: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendItem;
