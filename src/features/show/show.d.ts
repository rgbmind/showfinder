type Schedule = {
  time: string;
  days: string[];
};
type Country = {
  name: string;
  code: string;
  timezone: string;
};
type Network = {
  id: number;
  name: string;
  country: Country;
  officialSite: string | null | undefined;
};

type Links = {
  self: {
    href: string;
  };
  previousepisode: {
    href: string;
  };
};
type Show = {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: Schedule;
  rating: {
    average: number;
  };
  weight: number;
  network: Network;
  webChannel: null | string | undefined;
  dvdCountry: null | string | undefined;
  externals: {
    tvrage: number;
    thetvdb: number;
    imdb: string;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  updated: 1663295367;
  _links: {};
};

type InitialState = {
  loading: boolean;
  keyword: string;
  status: 'idle' | 'pending' | 'failed';
  show: {};
  error: string | {};
};
