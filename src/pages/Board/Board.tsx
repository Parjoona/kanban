import React from 'react';
import AddTask from '../../components/AddTask/AddTask';
import Card from '../../components/Card/Card';
import BoardColumn from './BoardColumn/BoardColumn';

export default function Board() {
  const columns = [
    {
      name: 'todo',
      items: [
        {
          stuff: 'blabla',
          name: 'task',
          amountCompleted: '5/6',
        },
      ],
    },
  ];

  return (
    <div>
      {columns.map(({ name, items }) => (
        <BoardColumn name={name}>
          {items.map((props) => (
            <Card {...props} />
          ))}
          <AddTask />
        </BoardColumn>
      ))}
    </div>
  );
}
