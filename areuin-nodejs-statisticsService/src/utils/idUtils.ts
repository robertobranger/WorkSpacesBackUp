import * as moment from 'moment';
import { v4 as uuid } from 'uuid';

export class idUtils {
  private static RANDOM_SECTION_LENGTH = 11;

  // This id is much more expensive to sort than UUID
  public static GenerateTimestampRandomID(): bigint {
    const timestamp = BigInt(moment.now());
    const randomNumber = BigInt(
      Math.floor(Math.random() * 10 ** idUtils.RANDOM_SECTION_LENGTH)
    );
    return timestamp * 10n ** BigInt(idUtils.RANDOM_SECTION_LENGTH) + randomNumber;
  }

  public static isTimestampRandomId(id?: BigInt) {
    if (!id) {
      return false;
    }
    return id > (10n ^ BigInt(moment.now.toString().length + idUtils.RANDOM_SECTION_LENGTH));
  }

  public static GenerateUUID() {
    return uuid();
  }

  public static isUUID(id?: string): boolean {
    if (!id) {
      return false;
    }
    return new RegExp(
      '[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}'
    ).test(id.toString());
  }
}
