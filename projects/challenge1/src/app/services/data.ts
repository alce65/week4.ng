import { Gentleman } from '../model/gentleman';

export const getGentlemenData = (): Gentleman[] => {
  return [
    {
      id: 1,
      name: 'Bertin Osborne',
      initial: 'B',
      status: 'Alive',
      profession: 'Youtuber',
      twitter: '@osbourne',
      picture: 'assets/img/bertin.jpg',
      alternativeText: 'Osbourne pointing at you',
      selected: true,
    },
    {
      name: 'The Farytale',
      initial: 'F',
      status: 'RIP',
      profession: 'Influencer',
      twitter: 'pending',
      picture: 'assets/img/fary.jpg',
      alternativeText: 'The Fary pointing at you',
      id: 2,
      selected: false,
    },
    {
      id: 3,
      initial: 'C',
      name: 'Julius Churchs',
      status: 'Alive',
      profession: 'Java developer',
      twitter: '@julius_churchs',
      picture: 'assets/img/julio.jpg',
      alternativeText: 'Churchs pointing at you',
      selected: true,
    },
  ];
};
