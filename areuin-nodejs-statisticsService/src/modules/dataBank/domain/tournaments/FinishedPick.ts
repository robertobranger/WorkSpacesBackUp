import { ValueObject } from '../../../../base/domain/ValueObejct';
import { Guard } from '../../../../base/logic/Guard';
import { SettledBetId } from '../bets/SettledBetId';
import { SettledTournamentId } from '../tournaments/SettledTournamentId';
import { PlayerID } from '../PlayerId';
import { Result } from '../../../../base/logic/Result';

type FinishedPickProps = {
  playerId: PlayerID;
  tournamentId: SettledTournamentId;
  finishDate: Date[];
  bets: [{ position: string; bet: SettledBetId; points: number }];
  points: number;
};

export class FinishedPick extends ValueObject<FinishedPickProps> {
  constructor(props: FinishedPickProps) {
    super(props);
  }

  public static create(props: FinishedPickProps) {
    const guardResult = Guard.againstNullOrUndefinedBulk([
      { argument: props.playerId, argumentName: 'playerId' },
      { argument: props.tournamentId, argumentName: 'tournamentId' },
      { argument: props.finishDate, argumentName: 'finishDate' },
      { argument: props.bets, argumentName: 'bets' },
      { argument: props.points, argumentName: 'uinPoints' }
    ]);
    if (!guardResult.succeeded) {
      return Result.fail<FinishedPick>(guardResult.message);
    }
    return Result.ok<FinishedPick>(new FinishedPick(props));
  }
}
