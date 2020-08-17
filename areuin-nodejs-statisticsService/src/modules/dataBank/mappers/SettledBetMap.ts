import { Mapper } from '../../../base/infra/Mapper';
import { SettledBet } from '../domain/bets/SettledBet';
import { SettledBetDTO } from '../dtos/SettledBetDTO';

export class SettledBetMap implements Mapper {
  public static toDTO(settledBet: SettledBet): SettledBetDTO {
    return {
      settlementDate: settledBet.props.settlementDate.toISOString(),
      odds: {
        decimal: settledBet.props.odds.props.decimal,
        impliedProbability: settledBet.props.odds.impliedProbability,
        american: settledBet.props.odds.american.toString()
      },
      bet: {
        matchId: settledBet.props.bet.props.matchId.id.toString(),
        matchPeriod: settledBet.props.bet.props.matchPeriod.toString(),
        type: settledBet.props.bet.props.type.toString(),
        prediction: settledBet.props.bet.props.prediction.toString()
      },
      betOutcome: settledBet.props.betOutcome
    };
  }
}
