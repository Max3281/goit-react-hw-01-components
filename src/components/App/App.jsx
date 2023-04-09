import user from '../../fake_backend/user.json';
import data from '../../fake_backend/data.json';
import friends from '../../fake_backend/friends.json';
import transaction from '../../fake_backend/transactions.json';

import Profile from '../Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import Friends from 'components/Friends/Friends';
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
        stats={userData.stats}
      />

      <Statistics items={data} title="upload stats" />
      <Statistics items={data} />

      <Friends friends={friends} />

      <TransactionHistory data={transaction} />
    </Container>
  );
}

console.log(`1`);
