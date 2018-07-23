/* for non-dom exercies just use node for testing? */
const assert = require('assert')
const hello  = require('../solutions/hello_world')
const funcs  = require('../solutions/functions')
const count_stats  = require('../solutions/count_sport_stats')
const json   = require('../solutions/sports.json')

describe("Basic", () => {
   it("Hello World!", () => {
      assert(hello("Jeff") == "Hello Jeff")
   })

   it("Functions", () => {
      assert(funcs([(a, b) => a + b], [[1,2]]) == 3)
   })

   it("Count Stats", () => {
      const res = count_stats(json.results)
      assert(res.tries   == 154)
      assert(res.matches == 1602)
   })
})
