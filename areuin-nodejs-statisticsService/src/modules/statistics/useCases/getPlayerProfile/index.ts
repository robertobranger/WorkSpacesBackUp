import { GetPlayerProfile } from './GetPlayerProfile';
import { fakePlayerProfileRepo } from '../../repos';
import { GetPlayerProfileController } from './GetPlayerProfileController';

const getPlayerProfile = new GetPlayerProfile(fakePlayerProfileRepo);
const getPlayerProfileController = new GetPlayerProfileController(getPlayerProfile);

export { getPlayerProfile, getPlayerProfileController };
