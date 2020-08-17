import { ValueObject } from '../../../../base/domain/ValueObejct';
import { Guard } from '../../../../base/logic/Guard';
import { Result } from '../../../../base/logic/Result';

type BetProps = {
  matchPeriodId: string;
  type: string; // Total Points, Moneyline
  prediction: string; //Examples: 'Over' , 'Under', 'Home Win', 'Away Win'
  line?: number;
};

export class Bet extends ValueObject<BetProps> {
  constructor(bet: BetProps) {
    super(bet);
  }

  public static create(props: BetProps): Result<Bet> {
    const guardResult = Guard.againstNullOrUndefinedBulk([
      { argument: props.matchPeriodId, argumentName: 'MatchID' },
      { argument: props.type, argumentName: 'Type' },
      { argument: props.prediction, argumentName: 'Prediction' }
    ]);
    if (!guardResult.succeeded) {
      return Result.fail<Bet>(guardResult.message);
    }
    return Result.ok<Bet>(new Bet(props));
  }
}
