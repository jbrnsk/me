import { useRepo } from 'pinia-orm';
import FootballPlayerModel from 'src/models/football_player';

export const useTeams = () => {
  const homeTeam = [
    {
      coordinates: [3, 10],
      team: 'home',
      id: 20,
      type: 'lineman',
      skills: [],
    },
    {
      coordinates: [4, 10],
      team: 'home',
      id: 21,
      type: 'lineman',
      skills: [],
    },
    {
      coordinates: [5, 10],
      team: 'home',
      id: 22,
      type: 'lineman',
      skills: [],
    },
    {
      coordinates: [6, 10],
      team: 'home',
      id: 23,
      type: 'lineman',
      skills: [],
    },
    {
      coordinates: [7, 10],
      team: 'home',
      id: 24,
      type: 'lineman',
      skills: [],
    },
    {
      coordinates: [5, 15],
      team: 'home',
      id: 25,
      type: 'thrower',
      skills: ['pass', 'sure-hands'],
    },
    {
      coordinates: [5, 13],
      team: 'home',
      id: 26,
      type: 'thrower',
      skills: ['pass', 'sure-hands'],
    },
    {
      coordinates: [2, 14],
      team: 'home',
      id: 27,
      type: 'blitzer',
      skills: ['block'],
    },
    {
      coordinates: [3, 14],
      team: 'home',
      id: 28,
      type: 'blitzer',
      skills: ['block'],
    },
    {
      coordinates: [7, 14],
      team: 'home',
      id: 29,
      type: 'blitzer',
      skills: ['block'],
    },
    {
      coordinates: [8, 14],
      team: 'home',
      id: 30,
      type: 'blitzer',
      skills: ['block'],
    },
  ];

  const awayTeams = [
    {
      coordinates: [2, 7],
      team: 'away',
      id: 49,
      type: 'lineman',
      skills: [],
    },
    {
      coordinates: [3, 7],
      team: 'away',
      id: 50,
      type: 'lineman',
      skills: [],
    },
    {
      coordinates: [4, 9],
      team: 'away',
      id: 51,
      type: 'lineman',
      skills: [],
    },
    {
      coordinates: [5, 9],
      team: 'away',
      id: 52,
      type: 'lineman',
      skills: [],
    },
    {
      coordinates: [6, 9],
      team: 'away',
      id: 53,
      type: 'lineman',
      skills: [],
    },
    {
      coordinates: [7, 7],
      team: 'away',
      id: 54,
      type: 'lineman',
      skills: [],
    },
    {
      coordinates: [8, 7],
      team: 'away',
      id: 55,
      type: 'lineman',
      skills: [],
    },
    {
      coordinates: [2, 4],
      team: 'away',
      id: 56,
      type: 'blitzer',
      skills: ['block'],
    },
    {
      coordinates: [3, 4],
      team: 'away',
      id: 57,
      type: 'blitzer',
      skills: ['block'],
    },
    {
      coordinates: [7, 4],
      team: 'away',
      id: 58,
      type: 'blitzer',
      skills: ['block'],
    },
    {
      coordinates: [8, 4],
      team: 'away',
      id: 59,
      type: 'blitzer',
      skills: ['block'],
    },
  ];

  function savePlayersToStore() {
    useRepo(FootballPlayerModel).save([...homeTeam, ...awayTeams]);
  }

  return { savePlayersToStore };
};
