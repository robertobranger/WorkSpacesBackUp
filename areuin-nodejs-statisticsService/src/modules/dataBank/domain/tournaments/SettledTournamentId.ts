import { Entity } from '../../../../base/domain/Entity';
import { UniqueEntityID } from '../../../../base/domain/UniqueEntityID';
import { Result } from '../../../../base/logic/Result';

export class SettledTournamentId extends Entity<any> {
  private constructor(id?: UniqueEntityID) {
    super(null, id);
  }

  public static create(id?: UniqueEntityID): Result<SettledTournamentId> {
    return Result.ok<SettledTournamentId>(new SettledTournamentId(id));
  }
}
