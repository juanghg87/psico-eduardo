import { useState } from 'react';

const useZIndexControl = () => {
  const [zIndexes, setZIndexes] = useState({
    p1: 1,
    p2: 0,
    p3: 0,
    p4: 0,
  });

  const handleZIndexChange = (pClass) => {
    setZIndexes({
      p1: pClass === 'p1' ? 1 : 0,
      p2: pClass === 'p2' ? 1 : 0,
      p3: pClass === 'p3' ? 1 : 0,
      p4: pClass === 'p4' ? 1 : 0,
    });
  };

  return {
    zIndexes,
    handleZIndexChange,
  };
};

export default useZIndexControl;
