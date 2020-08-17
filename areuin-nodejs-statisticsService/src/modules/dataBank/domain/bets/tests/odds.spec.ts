import { Odds } from '../Odds';
import { Result } from '../../../../../base/logic/Result';

const oddsOrError1: Result<Odds> = Odds.create(-3);
const oddsError1 = oddsOrError1.errorValue();

test('Odds creation should fail for certain values', () => {
  expect(oddsOrError1.isSuccess).toBe(false);
  expect(oddsError1).toBe('Odds must be greater than 1');
});

const oddsOrError2: Result<Odds> = Odds.create(1);
const oddsError2 = oddsOrError2.errorValue();

test('Odds creation should fail for certain values', () => {
  expect(oddsOrError2.isSuccess).toBe(false);
  expect(oddsError2).toBe('Odds must be greater than 1');
});

const oddsOrError3: Result<Odds> = Odds.create(1.00001);
const odds3 = oddsOrError3.getValue();
const oddsValue3 = odds3 ? odds3.decimal : null;

test('Should be able to create Odds', () => {
  expect(oddsOrError3.isSuccess).toBe(true);
  expect(oddsValue3).toBe(1.00001);
});

const oddsOrError4: Result<Odds> = Odds.create(2);
const odds4 = oddsOrError4.getValue();
const decimalOdds4 = odds4 ? odds4.decimal : null;
const americanOdds4 = odds4 ? odds4.american : null;
const impliedProbability4 = odds4 ? odds4.impliedProbability : null;

test('Should be able to get different Odds formats', () => {
  expect(oddsOrError4.isSuccess).toBe(true);
  expect(decimalOdds4).toBe(2);
  expect(americanOdds4).toBe('+100');
  expect(impliedProbability4).toBe(0.5);
});
