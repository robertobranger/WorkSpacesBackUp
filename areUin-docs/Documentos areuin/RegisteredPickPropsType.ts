type RegisteredPickProps = {
  playerId: PlayerID;
  tournamentId: SettledTournamentId;
  settlementDate: Date;
  bets: [{position: string, bet: SettledBetId, proyectedPoints: number}];
  proyectedPoints: number;
};