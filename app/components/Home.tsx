import React from 'react';
import { Column, Table } from 'react-virtualized';
import 'react-virtualized/styles.css';

const list = [
  { name: 'brian', description: 'dog' },
  { name: 'garfield', description: 'cat' }
];

export default function Home() {
  return (
    <div>
      <Table
        width={500}
        height={500}
        headerHeight={50}
        rowHeight={50}
        rowCount={list.length}
        rowGetter={({ index }) => list[index]}>
        <Column label="Name" dataKey="name" width={200} />
        <Column width={200} label="Description" dataKey="description" />
      </Table>
    </div>
  );
}
