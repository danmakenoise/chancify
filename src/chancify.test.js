// @flow
import test from 'tape';
import chancify from './chancify';

test('chancify()', (t) => {
  t.is(
    typeof chancify,
    'function',
    'it is a function',
  );

  t.end();
});
