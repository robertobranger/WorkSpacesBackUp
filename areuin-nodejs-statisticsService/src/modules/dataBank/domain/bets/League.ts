import { ValueObject } from '../../../../base/domain/ValueObejct';
import { Guard } from '../../../../base/logic/Guard';
import { Result } from '../../../../base/logic/Result';

type LeagueProps = {
  name: string;
  stage: string;
  year: number;
  sport: string;
  region: string;
};

export class League extends ValueObject<LeagueProps> {
  constructor(props: LeagueProps) {
    super(props);
  }
  public static create(props: LeagueProps) {
    const guardResult = Guard.againstNullOrUndefinedBulk([
      { argument: props.name, argumentName: 'Name' },
      { argument: props.region, argumentName: 'Region' },
      { argument: props.sport, argumentName: 'Sport' },
      { argument: props.stage, argumentName: 'Stage' },
      { argument: props.year, argumentName: 'Year' }
    ]);
    
    if(!guardResult.succeeded) {
      return Result.fail<League>(guardResult.message)
    }
    return Result.ok<League>(new League(props))
  }
}
