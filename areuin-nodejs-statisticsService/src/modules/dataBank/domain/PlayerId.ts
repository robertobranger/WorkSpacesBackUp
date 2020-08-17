import { ValueObject } from '../../../base/domain/ValueObejct';
import { UniqueEntityID } from '../../../base/domain/UniqueEntityID';
import { Guard } from '../../../base/logic/Guard';
import { Result } from '../../../base/logic/Result';
import { idUtils } from '../../../utils/idUtils';

type PlayerIDProps = {
  id: UniqueEntityID;
};

export class PlayerID extends ValueObject<PlayerIDProps> {
  get id() {
    return this.props.id;
  }

  private constructor(id: PlayerIDProps) {
    super(id);
  }

  public static create(id: UniqueEntityID): Result<PlayerID> {
    const guardResult = Guard.againstNullOrUndefined({ argument: id, argumentName: 'id' });
    if (!guardResult.succeeded && guardResult.message) {
      return Result.fail<PlayerID>(guardResult.message);
    }
    const isIdUUID = idUtils.isUUID(id.toString());
    if (!isIdUUID) {
      return Result.fail<PlayerID>('id must be an UUID for PlayerIDs');
    }
    return Result.ok<PlayerID>(new PlayerID({ id }));
  }
}
