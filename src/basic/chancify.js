// @flow
type ChancifyOptsType = {
  outOf: number,
  runFor: number,
};

function chancify(func: Function, opts: ChancifyOptsType): void {
  const { outOf, runFor } = opts;

  const percentChance = runFor / outOf;
  const shouldRunFunc = Math.random() <= percentChance;

  if (shouldRunFunc) {
    func();
  }
}

module.exports = chancify;
