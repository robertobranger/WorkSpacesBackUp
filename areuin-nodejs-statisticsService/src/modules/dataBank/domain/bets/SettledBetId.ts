import { UniqueEntityID } from '../../../../base/domain/UniqueEntityID';
import { Result } from '../../../../base/logic/Result';
import { ValueObject } from '../../../../base/domain/ValueObejct';
import { idUtils } from '../../../../utils/idUtils';
import { Guard } from '../../../../base/logic/Guard';

type SettledBetIdProps = {
  id: UniqueEntityID;
};

export class SettledBetId extends ValueObject<SettledBetIdProps> {
  get id() {
    return this.props.id;
  }

  private constructor(id: SettledBetIdProps) {
    super(id);
  }

  public static create(id: SettledBetIdProps): Result<SettledBetId> {
    const guardResult = Guard.againstNullOrUndefined({ argument: id, argumentName: 'id' });
    if (!guardResult.succeeded && guardResult.message) {
      return Result.fail<SettledBetId>(guardResult.message);
    }
    const isIdUUID = idUtils.isUUID(id.toString());
    if (!isIdUUID) {
      return Result.fail<SettledBetId>('id must be an UUID for SettledBetIds');
    }
    return Result.ok<SettledBetId>(new SettledBetId(id));
  }
}
