type OfferedBet = {
    offeringDate: Date
    matchPeriod: MatchPeriodId;
    market: BetMarket; // Total Points, Moneyline
    prediction: string; //Examples: 'Over' , 'Under', 'Home Win', 'Away Win'
    line?: number;
    currentOdds: Odds;
}

type PlacedBet = {
    placementDate: Date
    matchPeriod: MatchPeriodId;
    market: BetMarket; // Total Points, Moneyline
    prediction: string; //Examples: 'Over' , 'Under', 'Home Win', 'Away Win'
    line?: number;
    finalOdds: Odds;
}

type SettledBet = {
    timestamps: {
        offeringDate: Date;
        placementDate: Date;
        settlementDate: Date;
    }
    odds: Odds;
    bet: Bet;
    betOutcome: 'won' | 'lost' | 'tied';
}

// Falta manejar la exclusion de los bets segun match y matchPeriod.

// Para el gameService. Esto se puede manejar con DTOs que tenga el game service de una, lo cual lo hace independiente del BookmakerService. Si se usan solo Ids de referencia, cada vez que un pick es pedido por el cliente, se debe pedir al ServiceProvider.
type placedBetDTO = {
    placementDate: Date
    matchPeriod: {
        id: MatchPeriodId;
        homeTeam: string;
        awayTeam: string;
        abbrePeriodName: string;
        periodName
    market: string; // Total Points, Moneyline
    prediction: string; //Examples: 'Over' , 'Under', 'Home Win', 'Away Win'
    line?: number;
    finalOdds: { american: string; impliedProbability: number };
    }
}

type SettledBetDTO = {};

type miscRules = {
    bets: {
        max_quota_assignment: [
          {
            id: string;
            active: boolean;
            label: string;
            quota: number;
            percentage: number;
          },
          {
            id: string;
            active: boolean;
            label: string;
            quota: number;
            percentage: number;
          }];
        max_quota_random_bet: number;
    }
};