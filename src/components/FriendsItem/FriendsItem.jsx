import propTypes, { func } from 'prop-types';
import {
  OneFriend,
  FriendsOnline,
  FriendsAvatar,
  FriendsName,
} from './FriendsItem.styled';

export default function FriendsItem({ isOnline, avatar, name }) {
  return (
    <OneFriend>
      <FriendsOnline online={isOnline}></FriendsOnline>
      <FriendsAvatar src={avatar} />
      <FriendsName>{name}</FriendsName>
    </OneFriend>
  );
}

FriendsItem.propTypes = {
  isOnline: propTypes.bool.isRequired,
  avatar: propTypes.any.isRequired,
  name: propTypes.string.isRequired,
};
