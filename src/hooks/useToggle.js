import { useState } from 'react';

export const useToggle = defaultValue => {
  const [isAdd, setIsAdd] = useState(defaultValue);

  const toggle = () => {
    setIsAdd(!isAdd);
  };

  return [isAdd, toggle];
};
