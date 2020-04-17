import { useState } from 'react';

export const useInc = ({
  maxValue = 100,
  minValue = -100,
  initial = 0,
  step = 1,
}) => {
  const [value, setValue] = useState(initial);
  const increase = () =>
    setValue(prevState =>
      prevState + step > maxValue ? maxValue : prevState + step,
    );
  const decrease = () =>
    setValue(prevState =>
      prevState - step < minValue ? minValue : prevState - step,
    );
  const reset = () => setValue(initial);
  return [value, { increase, decrease, reset }];
};
