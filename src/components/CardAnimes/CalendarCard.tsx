import React from 'react';
import { ComponentAnime } from '../Anime/Anime';
import { BoxAnimes, BoxTitle, ContainerCalendar } from './styles';

type TypeCardAnimes = {
  title: string;
  className?: string;
  // data?: Array<string>;
  type: 'calendar' | 'animes';
};

export const CardAnimes: React.FC<TypeCardAnimes> = ({
  title,
  className,
  type,
}) => {
  return (
    <ContainerCalendar className={className}>
      <BoxTitle>
        <div>
          <span />
          <span />
          <span />
        </div>
        <h1>{title}</h1>
      </BoxTitle>
      <BoxAnimes className="box-animes">
        <ComponentAnime
          type={type}
          url="https://images.alphacoders.com/605/thumbbig-605799.webp"
        />
        <ComponentAnime
          type={type}
          url="https://images7.alphacoders.com/303/thumbbig-303042.webp"
        />
        <ComponentAnime
          type={type}
          url="https://images.alphacoders.com/605/thumbbig-605799.webp"
        />
        <ComponentAnime
          type={type}
          url="https://images7.alphacoders.com/303/thumbbig-303042.webp"
        />
        <ComponentAnime
          type={type}
          url="https://images.alphacoders.com/605/thumbbig-605799.webp"
        />
        <ComponentAnime
          type={type}
          url="https://images7.alphacoders.com/303/thumbbig-303042.webp"
        />
        <ComponentAnime
          type={type}
          url="https://images.alphacoders.com/605/thumbbig-605799.webp"
        />
      </BoxAnimes>
    </ContainerCalendar>
  );
};
