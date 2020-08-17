import { SettledBet, SettledBetProps } from '../SettledBet';
import { UniqueEntityID } from '../../../../../base/domain/UniqueEntityID';
import { SettledBetMap } from '../../../mappers/SettledBetMap';
import { Odds, OddsProps } from '../Odds';
import { Bet, BetProps } from '../Bet';
//import { MatchId } from '../../matches/MatchPeriodId';
import { idUtils } from '../../../../../utils/idUtils';
import { SettledBetDTO } from '../../../dtos/SettledBetDTO';

const odds1: OddsProps = {
  decimal: 2,
  impliedProbability: 0.5,
  american: '+100'
};
const oddsOrError = Odds.create(odds1.decimal);
const odds = oddsOrError.getValue();
test('should be able to create and access Odds VO', () => {
  expect(odds1).toStrictEqual(odds.props);
});

const uniqueEntityID = new UniqueEntityID();
const matchIdOrError = MatchId.create(uniqueEntityID);
const matchId = matchIdOrError.getValue();

test('Should be able to create and access MatchID', () => {
  expect(idUtils.isUUID(matchId.id.toString())).toStrictEqual(true);
});

const bet1: BetProps = {
  matchId: matchId,
  matchPeriod: '1H',
  type: '1X2',
  prediction: 'Home wins'
};
const betOrError = Bet.create(bet1);
const bet = betOrError.getValue();

test('Should be able to create and access Bet VO', () => {
  expect(bet.props).toBe(bet1);
});

const date = new Date(1995, 5, 5);

const settledBet1: SettledBetProps = {
  settlementDate: date,
  odds: odds,
  bet: bet,
  betOutcome: 'won'
};
const settledBet1DTO: SettledBetDTO = {
  settlementDate: date.toISOString(),
  odds: {
    decimal: 2,
    impliedProbability: 0.5,
    american: '+100'
  },
  bet: {
    matchId: uniqueEntityID.toString(),
    matchPeriod: '1H',
    type: '1X2',
    prediction: 'Home wins'
  },
  betOutcome: 'won'
};

const settledBetOrError = SettledBet.create(settledBet1, new UniqueEntityID());
const settledBet = settledBetOrError.getValue();
const newSettledBetDTO = SettledBetMap.toDTO(settledBet);

test('Should be able to create a bet for a SettleBetAggregate', () => {
  expect(newSettledBetDTO).toStrictEqual(settledBet1DTO);
});
