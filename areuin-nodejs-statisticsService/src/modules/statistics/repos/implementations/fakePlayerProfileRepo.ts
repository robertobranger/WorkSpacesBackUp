import { IPlayerProfileRepo } from '../PlayerProfileRepo';
import { PlayerProfile } from '../../domain/PlayerProfile';
import { FakePlayerProfileMapper } from '../../mappers/fakePlayerProfileMapper';

export class FakePlayerProfileRepo implements IPlayerProfileRepo {
  private models: any;
  constructor(models: any) {
    this.models = models;
  }

  async exists(playerID: PlayerProfile): Promise<any> {
    return !!(playerID + this.models);
  }

  async save(playerProfile: PlayerProfile): Promise<any> {
    return playerProfile;
  }

  async update() {
    return false;
  }

  async getByPlayerID(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!FakePlayerProfileMapper.fromPersistance()) {
        reject('FakeRepo Promise rejected');
      }
      resolve(FakePlayerProfileMapper.fromPersistance());
    });
  }
}
