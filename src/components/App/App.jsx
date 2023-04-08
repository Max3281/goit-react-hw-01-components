import user from '../../user.json';
import data from '../../fake_backend/data.json';
import friends from '../../fake_backend/friends.json';
import transaction from '../../fake_backend/transactions.json';

import Profile from '../Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import Friends from 'components/FriendsList/Friends'
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

import { Container } from './App.styled';

const userData = user;

export default function App() {
  return (
    <Container>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />

      <Statistics items={data} />
      
      <Friends friends={friends} />

      <TransactionHistory data={ transaction} />
    </Container>
  );
}