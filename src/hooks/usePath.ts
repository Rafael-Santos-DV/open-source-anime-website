import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useLocalPath = () => {
  const location = useLocation();
  const [localPath, setLocalPath] = useState({});
  useEffect(() => {
    setLocalPath(location);
  }, [location]);

  return localPath;
};
