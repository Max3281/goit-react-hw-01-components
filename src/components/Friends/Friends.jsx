import propTypes from 'prop-types';
import { FriendsCard, FriendsUnit } from './Friends.styled';
import FriendsItem from 'components/FriendsItem/FriendsItem';

export default function Friends({ friends }) {
  return (
    <FriendsCard>
      <FriendsUnit>
        {friends.map(({ id, isOnline, avatar, name }) => {
          return (
            <FriendsItem
              key={id}
              isOnline={isOnline}
              avatar={avatar}
              name={name}
            />
          );
        })}
      </FriendsUnit>
    </FriendsCard>
  );
}

Friends.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      isOnline: propTypes.bool.isRequired,
      name: propTypes.string.isRequired,
    })
  ).isRequired,
};
