import { ValueObject } from '../../../../base/domain/ValueObejct';
import { Guard } from '../../../../base/logic/Guard';
import { Result } from '../../../../base/logic/Result';
import { League } from './League';

type MatchProps = {
  scheduledDate: Date;
  league: League;
  homeTeam: string;
  awayTeam: string;
};

export class Match extends ValueObject<MatchProps> {
  constructor(props: MatchProps) {
    super(props);
  }

  public static create(props: MatchProps) {
    const guardResult = Guard.againstNullOrUndefinedBulk([
      { argument: props.awayTeam, argumentName: 'Home team' },
      { argument: props.homeTeam, argumentName: 'Away team' },
      { argument: props.league, argumentName: 'League' }
    ]);

    if (!guardResult.succeeded) {
      return Result.fail<Match>(guardResult.message);
    }
    return Result.ok<Match>(new Match(props));
  }
}
