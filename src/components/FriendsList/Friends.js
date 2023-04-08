import propTypes from 'prop-types';
import {
  FriendsCard,
  FriendsUnit,
  OneFriend,
  FriendsOnline,
  FriendsAvatar,
  FriendsName,
} from './Friends.styled';

export default function Friends({ friends }) {
  return (
    <FriendsCard>
      <FriendsUnit>
        {friends.map(friend => {
          const { id, isOnline, avatar, name } = friend;
          return (
            <OneFriend key={id}>
              <FriendsOnline online={isOnline}></FriendsOnline>
              <FriendsAvatar src={avatar} />
              <FriendsName>{name}</FriendsName>
            </OneFriend>
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
  ),
};
