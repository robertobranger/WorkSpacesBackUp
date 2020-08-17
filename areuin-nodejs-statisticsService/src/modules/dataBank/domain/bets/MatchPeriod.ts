import { AggregateRoot } from '../../../../base/domain/AggregateRoot';
import { UniqueEntityID } from '../../../../base/domain/UniqueEntityID';
import { Match } from './Match';
import { Guard } from '../../../../base/logic/Guard';
import { Result } from '../../../../base/logic/Result';

type MatchPeriodProps = {
  creationTimestamp: Date;
  startTimestamp: Date;
  endTimestamp: Date;
  match: Match;
  name: string;
  order: number;
  homeScore: number;
  awayScore: number;
  totalPoints: number;
};

export class MatchPeriod extends AggregateRoot<MatchPeriodProps> {
  constructor(props: MatchPeriodProps, id: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: MatchPeriodProps, id: UniqueEntityID) {
    const guardResult = Guard.againstNullOrUndefinedBulk([
      { argument: props.creationTimestamp, argumentName: 'Creation timestamp' },
      { argument: props.startTimestamp, argumentName: 'Start timestamp' },
      { argument: props.endTimestamp, argumentName: 'End timestamp' },
      { argument: props.match, argumentName: 'Match' },
      { argument: props.name, argumentName: 'Name' },
      { argument: props.order, argumentName: 'Order' },
      { argument: props.homeScore, argumentName: 'Home score' },
      { argument: props.awayScore, argumentName: 'Away score' },
      { argument: props.totalPoints, argumentName: 'Total points' }
    ]);

    if (!guardResult.succeeded) {
      return Result.fail<MatchPeriod>(guardResult.message);
    }
    return Result.ok<MatchPeriod>(new MatchPeriod(props, id));
  }
}
