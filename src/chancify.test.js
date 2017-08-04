// @flow
const test = require('tape');
const chancify = require('./chancify');

const TEST_COUNT = 10000;

test('wrapper chancify()', (t): void => {
  runChancifyTest(t, { chance: 100 / 100, variance: 0 });
  runChancifyTest(t, { chance: 50 / 100, variance: 100 });
  runChancifyTest(t, { chance: 1 / 100, variance: 100 });
  runChancifyTest(t, { chance: 0 / 100, variance: 100 });
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
