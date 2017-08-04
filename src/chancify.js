// @flow
function chancify(func: Function, percentChance: number): Function {
  function chancified(...args): void {
    const shouldRunFunc = Math.random() <= percentChance;

    if (shouldRunFunc) {
      func(...args);
    }
  }

  return chancified;
}

module.exports = chancify;
