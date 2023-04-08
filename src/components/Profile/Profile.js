import propTypes from 'prop-types';
import {
  UserProfile,
  UserDescription,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  UserStatsUnit,
  UserStatsLabel,
  UserStatsQuantity,
} from './Profile.styled';

export default function Profile(props) {
  const { avatar, username, tag, location, followers, views, likes } = props;
  return (
    <UserProfile>
      <UserDescription>
        <UserAvatar src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserDescription>

      <UserStats>
        <UserStatsUnit>
          <UserStatsLabel>Followers</UserStatsLabel>
          <UserStatsQuantity>{followers}</UserStatsQuantity>
        </UserStatsUnit>
        <UserStatsUnit>
          <UserStatsLabel>Views</UserStatsLabel>
          <UserStatsQuantity>{views}</UserStatsQuantity>
        </UserStatsUnit>
        <UserStatsUnit>
          <UserStatsLabel>Likes</UserStatsLabel>
          <UserStatsQuantity>{likes}</UserStatsQuantity>
        </UserStatsUnit>
      </UserStats>
    </UserProfile>
  );
}

Profile.propTypes = {
  avatar: propTypes.string,
  username: propTypes.string,
  location: propTypes.string,
  tag: propTypes.string,
  followers: propTypes.number,
  views: propTypes.number,
  likes: propTypes.number,
};
