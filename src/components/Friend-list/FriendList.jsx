import FriendItem from './FriendItem/FriendItem';
import './FriendsList.scss';

const FriendList = () => {
  return (
    <section className="friends-section">
      <ul className="friend-list">
        <FriendItem />
      </ul>
    </section>
  );
};

export default FriendList;
