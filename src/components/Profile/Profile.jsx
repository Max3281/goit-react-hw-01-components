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

export default function Profile({ avatar, username, tag, location, stats }) {
  const { followers, views, likes } = stats;
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
  avatar: propTypes.string.isRequired,
  username: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  stats: propTypes.shape({
    followers: propTypes.number.isRequired,
    views: propTypes.number.isRequired,
    likes: propTypes.number.isRequired,
  }).isRequired,
};
