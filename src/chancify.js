// @flow
function chancify(func: Function, percentChance: number): Function {
  function chancified(): void {
    const shouldRunFunc = Math.random() <= percentChance;

    if (shouldRunFunc) {
      func();
    }
  }

  return chancified;
}

module.exports = chancify;
