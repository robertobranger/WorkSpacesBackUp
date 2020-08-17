export class Result<T> {
  public isSuccess: boolean;
  private error?: T | string;
  private _value?: T;

  protected constructor(isSuccess: boolean, error?: T | string, value?: T) {
    if (isSuccess && error) {
      throw new Error("InvalidOperation: result can't be sucesfull and have an error");
    }
    if (!isSuccess && !error) {
      throw new Error('InvalidOperation: failed results need to contain respective error');
    }
    this.isSuccess = isSuccess;
    this.error = error;
    this._value = value;

    Object.freeze(this);
  }

  public static ok<U>(value?: U): Result<U> {
    return new Result<U>(true, undefined, value);
  }
  public static fail<U>(error: U | string): Result<U> {
    return new Result<U>(false, error);
  }

  public getValue(): T {
    if (!this.isSuccess) {
      console.log(this.error);
      throw new Error("Can't get the value of an error result. Use 'errorValue' instead.");
    }
    return this._value as T;
  }
  public errorValue(): T {
    return this.error as T;
  }

  public static combine(results: Result<any>[]): Result<any> {
    for (const result of results) {
      if (!result.isSuccess) return result;
    }
    return Result.ok();
  }
}
