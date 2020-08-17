interface TournamentStateResult {
    nextState(): TournamentStateResult;
    fail(): FailedTournament;
}

type props 

type tournamentVersions = {}

class FailedTournament {
    tournament: tournamentVersions;
    message?: string
}

abstract class AggregateRoot {
    props: string;
    constructor(){console.log('hello World')}}

class newTournament extends AggregateRoot implements TournamentStateResult {
    constructor(props){
        super()
    }
    create(props){
        return null
    }
    nextState(): ScheduledTournament{
        return new ScheduledTournament(this.props)
    };
    fail(){
        return null
    };
}

export class ScheduledTournament extends AggregateRoot implements TournamentStateResult {
    constructor(props){
        super()
    }
    create(props){
        return null
    }
    nextState(){
        return null
    };
    fail(){
        return null
    };
}



type StateSpecificRules = {
    lastRewardFactor: number;
    maxEntriesPerUser: number;
    FeeFraction: number;
    amountToPot: number;
};

type TournamentProfile = {
    TournamentName: string
    gameName: 'Picks';
    gameRules: PickRulesID;
    rewardMode: string;
    rewardedParticipantsFraction: number ;
    maxEntriesProfile: string;
    entryPrice: UinCoins;
};

type newTournamentStateProps = {
    startDate: Date;
    publicationDate: Date;
    name: string
    profile: TournamentProfile;
    minValidMatches: PositiveInteger;
    minValidBets: PositiveInteger;
    latestMatchDate: Date;
    forcedFinishDate: Date;
  };
  
type ScheduledTournament = {
    previousState: newTournament; 
}
type PublishedTournament = {
    winningSpots: number;
    relevance: number;
    didAutoCreationHappen:boolean;
    autoCreated: boolean;
    infoIcons: {
        isBigTournament:boolean;
        hasSpecialJackpot: boolean;
        hasBigPot: boolean;
    };
    registeredTickets: RegisteredPickId[];
    unregistredTickets: UnregisteredPickId[];
    TotalregisteredTickets: number;
    currentPot: number;
    currentAreuinFee: number;
    averageRisk: Odds;
    tournamentType: string;
    prizeTable: {position: number, prize: UinCoins}[]
} 
  
type ClosedTournament = {
    lastRegistrationDate: Date
    pot: number;
    areuinFee: number;
}
  
  type InPlayTournament = {
    previousState: PublishedTournament;
    scoreBoard: {Position: number, pick: FinishedPickID | StartedPickId, points: Points }[];
  }
  
  type FinishedTournament = {
    previousState: InPlayTournament;
    finishDate: Date;
    resultsBoard: {Position: number, pick: FinishedPickId, points: Points, Prize?: number}[];
    settledPicks: SettledPickID[];
  }
  
  type SettledTournamentProps = {
    previousState: FinishedTournament  
    settlementDate: Date;
  };



  type miscRules = {
    tournament: {
        endBuffer: number;
        default_publication_duration: number;
        default_tournament_duration: number;
        minimum_time_for_publication: number;
        auto_creations: {
          sameTournament: boolean;
          tournamentWithOnlyOneAttributeChanged: boolean;
          max_entries_limit: number;
          fit_percentage: number;
        };
        tournament_duration_after_beginning: number;
      };
      high_max_entries: {
        active: boolean;
        minimum_registered_ticket: number;
        tournament_filled_percentage_to_show: number;
        relevance: {
            active: boolean;
            refresh_rate: number;
            step_range_for_sigmoid: number;
            relevance_update_interval: number;
            registered_ticket: {
              maximum: number;
              minimum: number;
              a_constant: number;
              b_constant: number;
            };
            timeRemaining: {
              maximum: number;
              minimum: number;
              a_constant: number;
              b_constant: number;
            };
            trending_pick_buffer: number;
            top_satelites_buffer: number;
          };
  }