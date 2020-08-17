export interface GetPlayerProfileResponseDTO {
  main: {
    xpPointsCurrentLevel: number;
    uinLevel: string;
    uinLevelStars: number;
    uinRisk: {
      chart: number[];
      americanOdd: string;
      impliedProbability: number;
    };
    statisticalRatio: {
      chart: number[];
      value: number;
      percentile: number;
    };
  };
  bets: {
    total: {
      generalRatio: number;
      played: number;
      won: number;
      lost: number;
      tied: number;
    };
    betsBySports: {
      sports: { name: string; played: number }[];
      eSports: { name: string; played: number }[];
    };
  };
  picks: {
    total: {
      played: number;
      won: number;
      ratio: number;
    };
    byBetsPerPick: { betsPerPick: number; played: number; won: number; ratio: number }[];
    medalsByTournamentType: { name: string; gold: number; silver: number; bronze: number }[];
  };
}
