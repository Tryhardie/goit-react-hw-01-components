import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  font-size: 24px;
  background-color: #e6edf5;
  outline: 1px solid #c1cfdf;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
`;

const UserImage = styled.img`
  border-radius: 50%;
  max-height: 250px;
`;

const UserName = styled.p`
  font-weight: 700;
`;

const UserStats = styled.ul`
  display: flex;
  justify-content: space-evenly;
  background-color: #dbe5f0;
  outline: 1px solid #c1cfdf;
`;

const UserStatItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Quantity = styled.span`
  font-weight: 500;
`;

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Wrapper>
      <UserInfo>
        <UserImage src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </UserInfo>
      <UserStats>
        <UserStatItem>
          <span className="label">Followers</span>
          <Quantity>{stats.followers}</Quantity>
        </UserStatItem>
        <UserStatItem>
          <span className="label">Views</span>
          <Quantity>{stats.views}</Quantity>
        </UserStatItem>
        <UserStatItem>
          <span className="label">Likes</span>
          <Quantity>{stats.likes}</Quantity>
        </UserStatItem>
      </UserStats>
    </Wrapper>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
