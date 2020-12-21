import React from 'react';
import { Table } from 'react-bootstrap';

const TableRecommendation = ({ data }) => {
  const listMusic = data.map((e, index) => {
    return (
      <tr key={(e.title, index)}>
        <td>{e.title}</td>
        <td>{e.artist}</td>
        <td>{e.genres}</td>
      </tr>
    );
  });
  return (
    <Table striped hover>
      <thead style={{ fontSize: '20px', color: 'white' }}>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody style={{ color: 'white', fontWeight: 'lighter' }}>
        {listMusic}
      </tbody>
    </Table>
  );
};

export default TableRecommendation;
