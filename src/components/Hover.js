import React from 'react';
import { Card } from '../Elements';
import { useHover } from '../hooks';
import black from '../black.png';

const Hover = () => {
  const [isHovered, bind] = useHover(false);

  return (
    <div>
      <Card
        {...bind}
        style={{ background: isHovered ? 'var(--purp)' : 'var(--black)' }}
      >
        <h3>Some card</h3>
        <img src={black} alt='black card' />
      </Card>
    </div>
  );
};

export default Hover;
