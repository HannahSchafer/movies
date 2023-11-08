export type CategoryOptions = {
  [key: string]: string;
};

export const CATEGORIES: CategoryOptions = {
  popular: "Popular Movies",
  now_playing: "Now Playing",
  top_rated: "Top Rated",
  upcoming: "Upcoming",
};

export const CATEGORY_BY_ID = {
  0: {
    type: "popular",
    label: "Popular Movies",
  },
  1: {
    type: "now_playing",
    label: "Now Playing",
  },
  2: {
    type: "top_rated",
    label: "Top Rated",
  },
  3: {
    type: "upcoming",
    label: "Upcoming",
  },
};
