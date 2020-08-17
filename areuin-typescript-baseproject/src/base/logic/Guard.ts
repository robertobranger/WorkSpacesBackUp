interface IGuardResult {
  succeeded: boolean;
  message?: string;
}

interface IGuardArgument {
  argument: any;
  argumentName: string;
}

export class Guard {
  public static againstNullOrUndefined(guardArguments: IGuardArgument): IGuardResult {
    if (guardArguments.argument === null || guardArguments.argument === undefined) {
      return {
        succeeded: false,
        message: `${guardArguments.argumentName} is null or undefined`
      };
    } else {
      return { succeeded: true };
    }
  }

  public static againstNullOrUndefinedBulk(guardArguments: IGuardArgument[]): IGuardResult {
    for (const argument of guardArguments) {
      const result = this.againstNullOrUndefined(argument);
      if (!result.succeeded) return result;
    }
    return { succeeded: true };
  }

  public static againstAtLeast(numChars: number, text: string): IGuardResult {
    return text.length >= numChars
      ? { succeeded: true }
      : {
          succeeded: false,
          message: `Text is not at least ${numChars} chars.`
        };
  }

  public static againstAtMost(numChars: number, text: string): IGuardResult {
    return text.length <= numChars
      ? { succeeded: true }
      : {
          succeeded: false,
          message: `Text is greater than ${numChars} chars.`
        };
  }

  public static inRange(
    num: number,
    min: number,
    max: number,
    argumentName: string
  ): IGuardResult {
    const isInRange = num >= min && num <= max;
    if (!isInRange) {
      return {
        succeeded: false,
        message: `${argumentName} is not within range ${min} to ${max}.`
      };
    } else {
      return { succeeded: true };
    }
  }

  public static allInRange(
    numbers: number[],
    min: number,
    max: number,
    argumentName: string
  ): IGuardResult {
    let failingResult: Nullable<IGuardResult> = null;
    for (const num of numbers) {
      const numIsInRangeResult = this.inRange(num, min, max, argumentName);
      if (!numIsInRangeResult.succeeded) failingResult = numIsInRangeResult;
    }

    if (failingResult) {
      return { succeeded: false, message: `${argumentName} is not within the range.` };
    } else {
      return { succeeded: true };
    }
  }

  public static isOneOf(value: any, validValues: any[], argumentName: string): IGuardResult {
    let isValid = false;
    for (const validValue of validValues) {
      if (value === validValue) {
        isValid = true;
      }
    }

    if (isValid) {
      return { succeeded: true };
    } else {
      return {
        succeeded: false,
        message: `${argumentName} isn't oneOf the correct types in ${JSON.stringify(
          validValues
        )}. Got "${value}".`
      };
    }
  }

  public static combine(guardResults: IGuardResult[]): IGuardResult {
    for (const result of guardResults) {
      if (result.succeeded === false) return result;
    }

    return { succeeded: true };
  }
}
