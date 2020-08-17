// Estado actual: TournamentStateMachine service basado en case manipulando el objeto tournament. Quienes usan pueden usar estados incorrectos de data.
// Data compartida y mutable requeire de sincronizacion.
// PrimerFailed la cebolla. Mientras mas avanzado esta el objeto mas data mutable tiene.
// Primer Approach programacion funcional utilizando el method CreateNext(). En los props de cada estado se ve clarito la evolucion de la data del torneo.  
// Segundo Approach usando state Pattern. Un aggregateRoot debe crear muchos tipos de estados.
// Ambos approaches tienen objetos nuevos en cada fase. 

// Chain of responsability descartado porque un solo handler debe manejar el objeto de entrada.

// Caracteristicas de State: Facilita agregar Entorpece hacer la data inmutable porque el wrapper tiene que tener opcional la data que va a llevar hasta el final desde el principio. El Le da mas importancia a la estrucutra de datos. State necesita de atributos readOnly. El tournament funciona como caparazon y es el aggregate root, el state es un objeto dentro. Los todos los torneos sin importar su estado son iguales por fuera y probablemente se guardan en una sola tabla. Los states se pueden guardar en una carpeta especifica. Para que sean inmmutables las props del torneo deben ponerse inicialmente opcionales las que se definen mas adelante del torneo, se pierde de vista la evolu. La razon mas importante por la que veo que el state pattern es un problema es porque los states que estan dentro del torneo tienen que generar eventos y son los aggregate roots los que tienen que generar los eventos. Todos los eventos del mismo estado van a ser manejados por todos los handlers que necesiten alguno de todos los estados del torneo.  
// Caracteristicas de Functional: Es particularmente util para selected y offeredBet, dado que pueden haber muchas PlacedBets para un mismo offeredBet. Permite mantener la validacion de null or undefined en el metodo create de las clases. El estado envuelve al las propiedades core. Le da mas visibilidad al comportamiento. El approach funcional permite separar en los distintos tipos de eventos y no un solo evento con estados. 

type Category = {
    regions: string[];
    sports: string[];
    leagues: string[];
};
  
type TournamentRules = {
  gameName: 'Picks';
  gameRules: {
    maxBetsPerPick: number;
    category: Category;
    maxDecimalOddForBets: number
  };
  rewardMode: string;
  rewardedFraction: number ;
  maxEntries: number;
  maxEntriesPerUser: number;
  ticketRegistrationPrice: UinCoins;
  ticketFeeFraction: number;
  amountToPot: number;
  winningSpots: number;
};
  
  relevance
  isBigTournament
  hasSpecialJackpot
  didAutoCreationHappen
  autoCreated
  hasBigPot
  registrationEndDate
  lastRewardFactor
  status
  tournamentProfile
  tournamentType
  
  
  
  
  type PositiveInteger = number;
  
  type PrizeTable = {position: number, prize: UinCoins}[]
  
  type newTournament = {
    startDate: Date;
    name: string
    publicationDate: Date;
    rules: TournamentRules;
    preliminaryPrizeTable: PrizeTable;
    minValidMatches: PositiveInteger;
    minValidBets: PositiveInteger;
    latestMatchDate: Date;
    forcedFinishDate: Date;
  };
  
  type ScheduledTournament = {
    previousState: newTournament; 
  }
  
  type PublishedTournament = {
    previousState: ScheduledTournament;
    registeredTickets: RegisteredPickId[];
    unregistredTickets: UnregisteredPickId[];
    TotalregisteredTickets: number;
    pot: number;
    areuinFee: number;
    averageRisk: Odds;
  } 
  
  type ClosedTournament = {
    previousState: PublishedTournament;
    prizeTable: PrizeTable:
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