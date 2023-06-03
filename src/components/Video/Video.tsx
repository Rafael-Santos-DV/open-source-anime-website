import React, {
  ReactNode,
  useEffect,
  useState,
  VideoHTMLAttributes,
  useRef,
} from 'react';
import { Awaiting, Container, NextVideo, VideoComponent } from './style';

type VideoType = {
  children: ReactNode;
  status: number | string | undefined;
} & VideoHTMLAttributes<HTMLVideoElement>;

export const Video: React.FC<VideoType> = ({ children, status, ...props }) => {
  const [change, setChange] = useState(true);
  const [isNext, setNext] = useState(false);

  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = ref.current as HTMLVideoElement;
    setChange(false);
    const finish = setTimeout(() => {
      setChange(true);
      setNext(false);
    }, 1000);

    const handleTimeUpdate = () => {
      let { duration, currentTime } = videoElement;

      duration /= 60;
      currentTime /= 60;

      const porcentMoment = duration - currentTime;

      if (porcentMoment <= 1) {
        console.log('next');
        setNext(true);
      }
    };

    videoElement.addEventListener('timeupdate', handleTimeUpdate);
    // videoElement.addEventListener('play', play);
    // videoElement.addEventListener('pause', pause);

    return () => {
      videoElement.removeEventListener('timeupdate', handleTimeUpdate);
      // videoElement.removeEventListener('play', play);
      // videoElement.removeEventListener('pause', pause);
      clearTimeout(finish);
    };
  }, [status]);

  return change ? (
    <Container>
      {/* <Play onClick={handlerPlay} play={playState}>
        PLAY
      </Play> */}
      <VideoComponent ref={ref} id="video" {...props}>
        {children}
      </VideoComponent>
      {isNext && <NextVideo>Passar para o próximo</NextVideo>}
    </Container>
  ) : (
    <Awaiting>Carregando...</Awaiting>
  );
};
