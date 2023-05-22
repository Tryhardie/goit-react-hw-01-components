import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

const TableRow = styled.tr`
  background-color: #009879;
  color: #ffffff;
  text-align: left;
`;

const ThAndTableDataStyles = css`
  padding: 12px 15px;
`;

const TableHeader = styled.th`
  ${ThAndTableDataStyles}
`;
const TableData = styled.td`
  ${ThAndTableDataStyles}
  min-width: 125px;
`;

const TableBodyRow = styled.tr`
  text-transform: capitalize;
  border-bottom: 1px solid #dddddd;
  &:nth-of-type(even) {
    background-color: #f3f3f3;
  }
  &:last-of-type {
    border-bottom: 2px solid #009879;
  }
  &:hover {
    font-weight: bold;
    color: #009879;
  }
`;

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableBodyRow key={id}>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
          </TableBodyRow>
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
