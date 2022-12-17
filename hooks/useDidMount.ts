import { useState, useEffect } from 'react';

/** Returns true after first render */
const useDidMount = () => {
  const [didMount, setDidMount] = useState(false);
  useEffect(() => setDidMount(true), []);
  return didMount;
};

export default useDidMount;
