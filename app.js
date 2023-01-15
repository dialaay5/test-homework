const check = require('./functions')

const checking_equal = check.is_equal([6, 4, 5, 2], [6, 4, 5])
const checking_bigger = check.is_bigger(8, 8)

console.log(checking_equal);
console.log(checking_bigger);


