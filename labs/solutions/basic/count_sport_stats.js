
module.exports = function count_stats(list) {
   return list.reduce((acc, curr) => ({
      matches: +curr.matches + acc.matches || 0,
      tries: +curr.tries + acc.tries || 0
   }), {});
};
