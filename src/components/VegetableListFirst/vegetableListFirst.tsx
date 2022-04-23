import React, { FC } from 'react';
import './vegetableListFirst.scss';
import VegetableCard from '../VegetableCard/vegetableCard';

const vegetables = [
  {
    id: '1',
    title: 'Cucumber',
    description: 'It is green',
    backgroundColor: 'green',
    available: true,
  },
  {
    id: '2',
    title: 'Carrot',
    description: 'It is orange',
    backgroundColor: 'orange',
    available: false,
  },
  {
    id: '3',
    title: 'Sweet pepper',
    description: 'It is in many colors',
    backgroundColor: 'yellow',
    available: true,
  },
];

const VegetableListFirst: FC = () => (
  <div
    className="vegetableListFirst"
  >
    {vegetables.map(({
      id, title, description, backgroundColor, available,
    }) => (
      <div key={id} className="vegetable-box">
        <VegetableCard
          id={id}
          title={title}
          bgColor={backgroundColor}
          description={description}
          isAvalible={available}
        />
      </div>
    ))}
  </div>
);

export default VegetableListFirst;
