import React, {
  ReactNode,
  useEffect,
  useState,
  VideoHTMLAttributes,
} from 'react';
import { Awaiting, VideoComponent } from './style';

type VideoType = {
  children: ReactNode;
  status: number | string | undefined;
} & VideoHTMLAttributes<HTMLVideoElement>;

export const Video: React.FC<VideoType> = ({ children, status, ...props }) => {
  const [change, setChange] = useState(true);

  useEffect(() => {
    setChange(false);
    const finish = setTimeout(() => {
      setChange(true);
    }, 1000);

    return () => {
      return clearTimeout(finish);
    };
  }, [status]);

  return change ? (
    <VideoComponent {...props}>{children}</VideoComponent>
  ) : (
    <Awaiting>Carregando...</Awaiting>
  );
};
