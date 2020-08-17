import { UniqueEntityID } from '../../../../base/domain/UniqueEntityID';
import { Result } from '../../../../base/logic/Result';
import { ValueObject } from '../../../../base/domain/ValueObejct';
import { idUtils } from '../../../../utils/idUtils';
import { Guard } from '../../../../base/logic/Guard';

type MatchIdProps = {
  id: UniqueEntityID;
};

export class MatchId extends ValueObject<MatchIdProps> {
  get id() {
    return this.props.id;
  }

  private constructor(id: UniqueEntityID) {
    super({ id: id });
  }

  public static create(id: UniqueEntityID): Result<MatchId> {
    const guardResult = Guard.againstNullOrUndefined({ argument: id, argumentName: 'id' });
    if (!guardResult.succeeded && guardResult.message) {
      return Result.fail<MatchId>(guardResult.message);
    }
    const isIdUUID = idUtils.isUUID(id.toString());
    if (!isIdUUID) {
      return Result.fail<MatchId>('id must be an UUID for MatchIds');
    }
    return Result.ok<MatchId>(new MatchId(id));
  }
}
