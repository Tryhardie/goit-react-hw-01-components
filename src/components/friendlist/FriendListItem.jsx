import PropTypes from 'prop-types';
import styled from 'styled-components';

const Friend = styled.li`
  display: flex;
  align-items: center;
  margin: 0 0 10px;
  &:last-child {
    margin-bottom: 15px;
  }
  width: 250px;
  outline: 1px solid #c1cfdf;
`;

const FriendName = styled.p`
  font-weight: 600;
  margin-left: 15px;
`;

const FriendStatus = styled.span`
  border-radius: 50%;
  margin: 0 10px;
  height: 20px;
  width: 20px;
  background-color: ${({ online }) => (online ? '#24be24' : '#cc2d2d')};
`;

export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <Friend key={id}>
      <FriendStatus online={isOnline}></FriendStatus>
      <img src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </Friend>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
