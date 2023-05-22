import PropTypes from 'prop-types';
import styled from 'styled-components';

function getRandomHexColor() {
  let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return bgColor;
}

const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-size: 30px;
  background-color: #e6edf5;
  outline: 1px solid #c1cfdf;
`;

const DataList = styled.ul`
  margin: 0 0 15px;
  width: 500px;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  outline: 1px solid #c1cfdf;
`;

const DataItem = styled.li`
  width: 100px;
  display: flex;
  text-align: center;
  flex-direction: column;
`;

const Percent = styled.span`
  font-weight: 700;
`;

export default function Statistics({ title, stats }) {
  return (
    <section>
      {title && <Title>{title}</Title>}
      <DataList>
        {stats.map(({ id, label, percentage }) => (
          <DataItem
            key={id}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <span>{label}</span>
            <Percent>{percentage}%</Percent>
          </DataItem>
        ))}
      </DataList>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
