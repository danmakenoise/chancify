// @flow
const test = require('tape');
const chancify = require('./chancify');

const TEST_COUNT = 10000;

test('chancify() percentage tests', (t): void => {
  runChancifyTest(t, { chance: 100 / 100, variance: 0 });
  runChancifyTest(t, { chance: 50 / 100, variance: 100 });
  runChancifyTest(t, { chance: 1 / 100, variance: 100 });
  runChancifyTest(t, { chance: 0 / 100, variance: 100 });
  t.end();
});

test('chancify() passes through arguments', (t): void => {
  let actualX;
  let actualY;
  let actualZ;

  const expectedX = 'x';
  const expectedY = 1;
  const expectedZ = ['more', 'tests', 'for', 'you'];

  const func = (x, y, z) => {
    actualX = x;
    actualY = y;
    actualZ = z;
  };
  const chancified = chancify(func, 100 / 100);

  chancified(expectedX, expectedY, expectedZ);

  t.deepEqual(actualX, expectedX, 'it passes on the first argument');
  t.deepEqual(actualY, expectedY, 'it passes on the second argument');
  t.deepEqual(actualZ, expectedZ, 'it passes on the third argument');

  t.end();
});

type RunChancifyTestOptsType = { chance: number, variance: number };

function runChancifyTest(t: any, opts: RunChancifyTestOptsType): void {
  const actual = getTestResult(opts);

  t.true(
    assertTestResult(actual, opts),
    generateTestMessage(actual, opts),
  );
}

function getTestResult({ chance }: RunChancifyTestOptsType): number {
  let actual = 0;
  const testFunction = chancify(() => { actual += 1; }, chance);

  for (let i = 0; i < TEST_COUNT; i += 1) {
    testFunction();
  }

  return actual;
}

function assertTestResult(actual: number, opts: RunChancifyTestOptsType): boolean {
  const { chance, variance } = opts;
  const expected = Math.floor(TEST_COUNT * chance);
  return actual >= (expected - variance) && actual <= (expected + variance);
}

function generateTestMessage(actual: number, opts: RunChancifyTestOptsType): string {
  const { chance, variance } = opts;
  const expected = Math.floor(TEST_COUNT * chance);
  const percentChance = Math.floor(chance * 100);
  return `Ran ${actual} times with ${percentChance}% chance, within acceptable ${variance} of ${expected}`;
}
