import { Profile } from './profile/Profile';
import user from '../data/user';
import { Statistics } from './statistics/Statistics';
import data from '../data/data';
import { FriendList } from './friendList/FriendList';
import friends from '../data/friends';
import { TransactionHistory } from './transactionHistory/TransactionHistory';
import transactions from '../data/transactions';

export const App = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        likes={user.stats.likes}
        views={user.stats.views}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
