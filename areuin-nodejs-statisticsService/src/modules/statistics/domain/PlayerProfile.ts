import { AggregateRoot } from '../../../base/domain/AggregateRoot';

type Main = {
  xpPointsCurrentLevel: number;
  uinLevel: string;
  uinLevelStars: number;
  uinRisk: {
    chart: [number];
    americanOdd: string;
    impliedProbability: number;
  };
  statisticalRatio: {
    chart: [number];
    value: number;
    percentile: number;
  };
};

type Bets = {
  total: {
    generalRatio: number;
    played: number;
    won: number;
    lost: number;
    tied: number;
  };
  betsBySports: {
    sports: [{ name: string; played: number }];
    eSports: [{ name: string; played: number }];
  };
};

type Picks = {
  total: {
    played: number;
    won: number;
    ratio: number;
  };
  byBetsPerPick: [{ betsPerPick: number; played: number; won: number; ratio: number }];
  medalsByTournamentType: [{ name: string; gold: number; silver: number; bronze: number }];
};

type PlayerProfileProps = {
  main: Main;
  bets: Bets;
  picks: Picks;
};

export class PlayerProfile extends AggregateRoot<PlayerProfileProps> {}
