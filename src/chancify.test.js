// @flow
import test from 'tape';
import chancify from './chancify';

const runChancifyTest = (t: any): void => {
  const numTestsToRun = 10000;
  let timesRun = 0;

  const testFunction = () => { timesRun += 1; };

  for (let i = 0; i < numTestsToRun; i += 1) {
    chancify(testFunction, 1 / 1);
  }

  t.is(
    timesRun === numTestsToRun,
    'it runs 100% of the time',
  );
};

test('chancify()', (t): void => {
  t.is(
    typeof chancify,
    'function',
    'it is a function',
  );

  runChancifyTest(t);

  t.end();
});
