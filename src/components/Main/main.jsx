import user from '../../data/user.json';
import Profile from '../Social-profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../Friend-list/FriendList';
import TransactionHistory from '../Transaction-history/TransactionHistory';

const Main = () => {
  const { avatar, tag, location, username, stats } = user;
  return (
    <main>
      <Profile
        username={username}
        tag={tag}
        stats={stats}
        location={location}
        avatar={avatar}
      />
      <Statistics title="Upload stats" />
      <FriendList />
      <TransactionHistory />
    </main>
  );
};

export default Main;
