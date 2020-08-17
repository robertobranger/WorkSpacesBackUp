type PickRules = {
    maxBetsPerPick: number;
    maxOddsForBets: number
    category: {
        name: string
        regions: string[];
        sports: string[];
        leagues: string[];
    };
};

type PickInfo = {
    creationDate: Date;
    registrationDate?: Date;
    finishDate?: Date;
    settlementDate: Date;
    user: UserID;
    tournament: TournamentId;
    pickRisk?: number;
}

type NewPick = {
    rules: PickRules;
    info: PickInfo;
    potentialPoints: number;
    bets: { position: number, bet?:OfferedBet, currentPotentialPoints: number }[];
    selectBet(position: number, bet: OfferedBet);
    registerPick();
    //private
    updateBetOdds()
    calculatePickRisk()
    makeFail()
};


type RegisteredPick = {
    rules: PickRules;
    info: PickInfo;
    bets: { order: number, bet: PlacedBet, potentialPoints: number }[];
    potentialPoints: number;
    potentialPosition: number;
    toStarted();
    makeFail();
};

type StartedPick = {
    rules: PickRules;
    info: PickInfo;
    bets: { position: number, bet: PlacedBet, potentialPoints: number }[]; //Apend Only
    currentPosition: number;
    updateSettledBet(SettledBet);
    toFinished();
    makeFail()
};

type FinishedPick = {
    previousState: StartedPick;
    bets: { position: number, bet: SettledBet, potentialPoints: number }[]
    securedPosition: number;
    result: Prize | 'Lost';
    trophy?: 'bronze' | 'silver' | 'gold'
    toSettled(transaction: TransactionID)
    makeFail();
};

type SettledPick = {
  previousState: FinishedPick;
  transactionID: string;
};

// La creacion de estos picks deberia estar en cada una de las clases anteriores o su state.
type FailedPick = {
  pick: RegisteredPick | StartedPick | FinishedPick;
  failingReason: string;
};
