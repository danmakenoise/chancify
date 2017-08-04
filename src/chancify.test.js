// @flow
const test = require('tape');
const chancify = require('./chancify');

const TEST_COUNT = 10000;

test('wrapper chancify()', (t): void => {
  runChancifyTest(t, { runFor: 100, outOf: 100, variance: 0 });
  runChancifyTest(t, { runFor: 50, outOf: 100, variance: 100 });
  runChancifyTest(t, { runFor: 1, outOf: 100, variance: 100 });
  runChancifyTest(t, { runFor: 0, outOf: 100, variance: 100 });
  t.end();
});

type RunChancifyTestOptsType = { outOf: number, runFor: number, variance: number };

function runChancifyTest(t: any, opts: RunChancifyTestOptsType): void {
  const actual = getTestResult(opts);

  t.true(
    assertTestResult(actual, opts),
    generateTestMessage(actual, opts),
  );
}

function getTestResult({ outOf, runFor }: RunChancifyTestOptsType): number {
  let actual = 0;
  const testFunction = chancify(() => { actual += 1; }, { outOf, runFor });

  for (let i = 0; i < TEST_COUNT; i += 1) {
    testFunction();
  }

  return actual;
}

function assertTestResult(actual: number, opts: RunChancifyTestOptsType): boolean {
  const { outOf, runFor, variance } = opts;
  const expected = Math.floor(TEST_COUNT * (runFor / outOf));
  return actual >= (expected - variance) && actual <= (expected + variance);
}

function generateTestMessage(actual: number, opts: RunChancifyTestOptsType): string {
  const { outOf, runFor, variance } = opts;
  const expected = Math.floor(TEST_COUNT * (runFor / outOf));
  const percentChance = Math.floor((runFor / outOf) * 100);
  return `Ran ${actual} times with ${percentChance}% chance, within acceptable ${variance} of ${expected}`;
}
