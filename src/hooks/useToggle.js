import { useState } from 'react';

export const useToggle = defaultValue => {
  const [isAdd, setIsAdd] = useState(defaultValue);

  // const toggle = () => setIsAdd(!isAdd);
  // const add = () => setIsAdd(true);
  // const notAdd = () => setIsAdd(false);

  return [isAdd, setIsAdd];
};
