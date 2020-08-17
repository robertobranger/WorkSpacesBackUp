import { ValueObject } from '../../../../base/domain/ValueObejct';
import { Result } from '../../../../base/logic/Result';
import { Guard } from '../../../../base/logic/Guard';

export type OddsProps = {
  decimal: number;
  impliedProbability: number;
  american: string;
};

export class Odds extends ValueObject<OddsProps> {
  private constructor(odds: number) {
    super({
      decimal: odds,
      impliedProbability: Odds.toImpliedProbability(odds),
      american: Odds.toAmerican(odds)
    });
  }

  public static create(odds: number): Result<Odds> {
    const guardResult = Guard.againstNullOrUndefined({ argument: odds, argumentName: 'odds' });
    if (!guardResult.succeeded) {
      return Result.fail<Odds>(guardResult.message);
    }
    if (odds <= 1) {
      return Result.fail<Odds>('Odds must be greater than 1');
    }
    return Result.ok<Odds>(new Odds(odds));
  }

  get decimal() {
    return this.props.decimal;
  }

  get impliedProbability() {
    return this.props.impliedProbability;
  }

  get american() {
    return this.props.american;
  }

  private static toAmerican(odds: number): string {
    if (odds >= 2) {
      return '+' + ((odds - 1) * 100).toFixed(0);
    } else {
      return '-' + (100 / (odds - 1)).toFixed(0);
    }
  }

  private static toImpliedProbability(odds: number): number {
    return 1 / odds;
  }
}
