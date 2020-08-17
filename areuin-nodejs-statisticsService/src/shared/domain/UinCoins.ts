import { ValueObject } from '../../base/domain/ValueObejct';
import { Result } from '../../base/logic/Result';

type UinCoinsProps = {
  ammount: number;
};

export class UinCoins extends ValueObject<UinCoinsProps> {
  get ammount() {
    return this.props.ammount;
  }

  private constructor(props: UinCoinsProps) {
    super(props);
  }
  public static create(ammount: number): Result<UinCoins> {
    if (ammount < 0) {
      return Result.fail<UinCoins>('UinCoins ammounts must be positive');
    }
    if (!Number.isInteger(ammount)) {
      return Result.fail<UinCoins>('UinCoins need to be integers');
    }
    return Result.ok<UinCoins>(new UinCoins({ ammount: ammount }));
  }

  public add(uinCoins: UinCoins): Result<UinCoins> {
    const sum = this.ammount + uinCoins.ammount;
    return UinCoins.create(sum);
  }
  public substract(uinCoins: UinCoins): Result<UinCoins> {
    const substraction = this.ammount - uinCoins.ammount;
    return UinCoins.create(substraction);
  }
  public multiply(uinCoins: UinCoins): Result<UinCoins> {
    const multiplication = this.ammount - uinCoins.ammount;
    return UinCoins.create(multiplication);
  }
  public divide(
    uinCoins: UinCoins
  ): { quotient: Result<UinCoins>; remainder: Result<UinCoins> } {
    const quotient = Math.floor(this.ammount / uinCoins.ammount);
    const remainder = this.ammount % uinCoins.ammount;
    return { quotient: UinCoins.create(quotient), remainder: UinCoins.create(remainder) };
  }
}
