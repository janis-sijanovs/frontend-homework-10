import React, { FC } from 'react';
import './vegetableCard.scss';

type VegetableCardProps = {
  id: string;
  title: string;
  bgColor: string;
  description: string;
  isAvalible?: boolean;
}

const VegetableCard: FC<VegetableCardProps> = ({
  id, bgColor, title, description, isAvalible,
}) => (
  <>
    {isAvalible ? (
      <div
        className="vegetableCard"
        style={{ backgroundColor: bgColor }}
      >
        <h2
          className="vegetableCard__title"
        >
          {title}
        </h2>
        <p
          className="vegetableCard__id"
        >
          {id}
        </p>
        <p
          className="vegetableCard__description"
        >
          {description}
        </p>
      </div>
    ) : <div className="vegetableCard vegetableCard--empty">Not avalible</div>}

  </>
);

export default VegetableCard;
