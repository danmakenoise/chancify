// @flow
type ChancifyOptsType = {
  outOf: number,
  runFor: number,
};

function chancify(func: Function, opts: ChancifyOptsType): Function {
  const { outOf, runFor } = opts;

  function chancified(): void {
    const percentChance = runFor / outOf;
    const shouldRunFunc = Math.random() <= percentChance;

    if (shouldRunFunc) {
      func();
    }
  }

  return chancified;
}

module.exports = chancify;
