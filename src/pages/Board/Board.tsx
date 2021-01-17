import React from 'react';
import Card from '../../components/Card/Card';
import BoardColumn from './BoardColumn/BoardColumn';

export default function Board() {
  return (
    <div>
      <BoardColumn>
        <Card />
      </BoardColumn>
    </div>
  );
}
