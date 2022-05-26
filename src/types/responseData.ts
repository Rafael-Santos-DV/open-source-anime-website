type espisodeType = {
  url: string;
  title: string;
};

export type ResponseData = {
  anime: string;
  animeId: string;
  ano: number;
  description: string;
  episodePoster: string;
  episodes: espisodeType[];
  gender: Array<string>;
  likes: number;
  poster: string;
  quant: number;
  __v: number;
  _id: string;
};
