import { AggregateRoot } from '../../../../base/domain/AggregateRoot';
import { Odds } from './Odds';
import { Bet } from './Bet';
import { Result } from '../../../../base/logic/Result';
import { UniqueEntityID } from '../../../../base/domain/UniqueEntityID';
import { Guard } from '../../../../base/logic/Guard';

export interface SettledBetProps {
  settlementDate: Date;
  odds: Odds;
  bet: Bet;
  betOutcome: 'won' | 'lost' | 'tied';
}

export class SettledBet extends AggregateRoot<SettledBetProps> {
  private constructor(settledBet: SettledBetProps, id: UniqueEntityID) {
    super(settledBet, id);
    Object.freeze(this);
  }

  public static create(props: SettledBetProps, id: UniqueEntityID): Result<SettledBet> {
    const guardResult = Guard.againstNullOrUndefinedBulk([
      { argument: props.settlementDate, argumentName: 'SettlementDate' },
      { argument: props.betOutcome, argumentName: 'Result' }
    ]);
    if (!guardResult.succeeded) {
      return Result.fail<SettledBet>(guardResult.message);
    }

    if (props.betOutcome != ('won' || 'lost' || 'tied')) {
      return Result.fail<SettledBet>('betOutcome must be either a sting: won | lost | tied');
    }
    return Result.ok<SettledBet>(new SettledBet(props, id));
  }
}
