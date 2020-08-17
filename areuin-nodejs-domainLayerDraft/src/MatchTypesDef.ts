// Origin Event: Subscription to NewMatchRecievedEvent o market recieved from request to TxOdds 
type ScheduledMatchPeriod = {
    creationTimestamp: Date;
    startTimestamp: Date;
    endTimestamp: Date;
    match: MatchId;
    name: string;
    order: number;
    homeScore: number;
    awayScore: number;
    totalPoints: number;
    cancel();
};

// Origin Event: Subscription to MatchPeriodStarted Event
// Este state puede no tener uso. 
type StartedMatchPeroid = {
    cancel();
};

// Origin Event: Subscription to MatchPeriodFinished Event 
type FinishedMatchPeriod = {
    
};

// Origin Event: Subscription to MatchPeriodCancelled Event
type CancelledMatchPeriod = {};

type MatchProps = {
    scheduledDate: Date;
    league: League;
    homeTeam: string;
    awayTeam: string;
};

type LeagueProps = {
    name: string;
    stage: string;
    year: number;
    sport: string;
    region: string;
};
  
type BetProps = {

};

interface SettledBetProps {

}

type MatchPeriodProps = {

};

type miscRules = {
    provider: {
        result_provider: string;
        odds_provider: string;
      };
}

// Faltan reglas de que periodos estan permitidos en que matches.

// El service provider lo tenemos que tratar como una BD y meterle mappers en la entrada de los 3 servicios que vamos a utilizar.
