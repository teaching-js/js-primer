const pipe = (...funcs) => (val) => funcs.reduce((input, fn) => fn(input), val)

module.exports = pipe
