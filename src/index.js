module.exports = function check(str, bracketsConfig) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] === bracketsConfig[j][0]) {
        stack.push(bracketsConfig[j][1]);
        break;
      } else if (str[i] === bracketsConfig[j][1]) {
        if (stack.pop() !== str[i]) {
          return false;
        }
        break;
      }
    }
  }
  return stack.length === 0;
};
