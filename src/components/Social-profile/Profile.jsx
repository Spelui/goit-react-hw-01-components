import PropTypes from 'prop-types';
import Label from './StatsItem/StatsItem';
import s from './Profile.module.scss';

const Profile = user => {
  const { avatar, tag, location, username, stats } = user;
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <Label title="Followers" quantity={stats.followers} />
        <Label title="Views" quantity={stats.views} />
        <Label title="Likes" quantity={stats.likes} />
      </ul>
    </div>
  );
};

Profile.prototype = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
