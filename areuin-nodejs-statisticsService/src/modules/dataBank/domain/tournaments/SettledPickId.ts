import { UniqueEntityID } from '../../../../base/domain/UniqueEntityID';
import { Result } from '../../../../base/logic/Result';
import { ValueObject } from '../../../../base/domain/ValueObejct';
import { idUtils } from '../../../../utils/idUtils';

type SettledPickIdProps = {
  id: UniqueEntityID;
};

export class SettledPickId extends ValueObject<SettledPickIdProps> {
  get id() {
    return this.props.id;
  }

  private constructor(id: SettledPickIdProps) {
    super(id);
  }

  public static create(id: UniqueEntityID): Result<SettledPickId> {
    const isIdUUID = idUtils.isUUID(id.toString());
    if (!isIdUUID) {
      return Result.fail<SettledPickId>('id must be an UUID for SettledPickIds');
    }
    return Result.ok<SettledPickId>(new SettledPickId({ id }));
  }
}
